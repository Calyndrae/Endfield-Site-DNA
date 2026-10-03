/**
 * Semantic reconstruction of the model/particle section in official home
 * chunk 226. It documents the scene data and control flow; shaders are
 * abbreviated and assets are intentionally not copied into this project.
 * This renderer is separate from the 33 operator enter/idle video pairs.
 */

export const MODEL_KEYS = [
  "factory", "enemy", "anchor", "spaceship", "pile", "trinity",
];

export const POINT_SCENE = {
  modelHeight: 1900,
  cameraFov: 75,
  cameraNear: 0.1,
  cameraFar: 10000,
  cameraPosition: [0, 300, 2000],
  canvasHeight: 1080,
  scanLineWidth: 20,
  scanLineStartY: -1150,
  scanLineEndY: 1350,
  automaticRotationRadiansPerFrame: 0.005,
  dragRotationRadiansPerPixel: 0.01,
  dragInterpolation: 0.1,
};

export function chooseRenderLevel(tenThousandPointBenchmarkMs) {
  if (tenThousandPointBenchmarkMs > 60) {
    return { level: 2, raysPerBatch: 8, maximumRays: 500, pixelRatio: 0.75 };
  }
  if (tenThousandPointBenchmarkMs > 30) {
    return { level: 1, raysPerBatch: 14, maximumRays: 1000 };
  }
  return { level: 0, raysPerBatch: 20, maximumRays: 2000 };
}

export async function loadPointPositions(binaryUrl) {
  const response = await fetch(binaryUrl);
  if (!response.ok) throw new Error(`Point model failed: ${response.status}`);
  const buffer = await response.arrayBuffer();
  const positions = new Float32Array(buffer);
  if (positions.length % 3) throw new Error("Expected xyz float triplets");
  return positions;
}

export function makePointAttributes(positions, random = Math.random) {
  const pointCount = positions.length / 3;
  const extra = new Float32Array(pointCount * 4);
  for (let point = 0; point < pointCount; point += 1) {
    const base = point * 4;
    extra[base] = 1; // Active point
    extra[base + 1] = 4 + 4 * random(); // Size 4..8
    extra[base + 2] = 1 + Math.floor(3 * random()); // Layer 1..3
    extra[base + 3] = -100 + 200 * random(); // Reveal delay
  }
  return extra;
}

export function createPointScene(THREE, canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    POINT_SCENE.cameraFov,
    canvas.clientWidth / canvas.clientHeight,
    POINT_SCENE.cameraNear,
    POINT_SCENE.cameraFar,
  );
  camera.position.set(...POINT_SCENE.cameraPosition);
  camera.lookAt(0, 0, 0);
  return { renderer, scene, camera };
}

export const shaderRules = {
  vertex: [
    "three animated scan-line Y uniforms",
    "near-line points shift from grey to yellow",
    "point size responds to depth, layer and size attribute",
    "glitch offset and reveal delay affect position",
  ],
  fragment: [
    "discard sprite fragments beyond radial distance 0.5",
    "feather edge; apply inner glow and scene vignette",
    "transparent output and depthWrite:false",
  ],
  laserRays: "InstancedBufferGeometry, spawned at scan line on alternating frames",
};

export function scanPass(layerIndex) {
  return {
    startY: POINT_SCENE.scanLineStartY,
    endY: POINT_SCENE.scanLineEndY,
    durationMs: 3000 / (layerIndex + 1),
    delayMs: 2000 * Math.log(layerIndex + 1),
  };
}
