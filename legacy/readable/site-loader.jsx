/**
 * Descriptively named reconstruction of site-owned loading module 71272 in
 * official chunk 8963-234f979bdd6b491c.js. `Motion` stands for the bundled
 * React motion API; CSS class names here are explanatory, not a drop-in import.
 */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

export function SiteLoader({ tasks = [], onLeaving, onFinished, isLandscape, BrandLogo }) {
  const loadTasks = useMemo(() => [...tasks], [tasks]);
  const [finishedTaskCount, setFinishedTaskCount] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const displayedPercent = useRef(null);
  const completionRatio = loadTasks.length ? finishedTaskCount / loadTasks.length : 1;

  useEffect(() => {
    setFinishedTaskCount(0);
    loadTasks.forEach((task) => task().finally(() =>
      setFinishedTaskCount((previous) => previous + 1)));
  }, []); // Site code starts the initial task set once.

  useEffect(() => {
    if (finishedTaskCount < loadTasks.length) {
      setIsLeaving(false);
      return undefined;
    }
    onLeaving?.();
    setIsLeaving(true);
    const contentReadyTimer = setTimeout(() => {
      // Source sets a global loaded state here, 1500ms after all tasks complete.
    }, 1500);
    const finishedTimer = setTimeout(() => onFinished?.(), 2400);
    return () => {
      clearTimeout(contentReadyTimer);
      clearTimeout(finishedTimer);
    };
  }, [finishedTaskCount, loadTasks.length, onLeaving, onFinished]);

  const percentage = completionRatio * 100;
  return (
    <div className={`site-loader ${isLeaving ? "site-loader--leaving" : ""}`}>
      <motion.div className="site-loader__backdrop"
        animate={{ filter: `blur(${8 - completionRatio * 8}px)` }}
        transition={{ type: "tween", duration: 0.5 }} />
      <div className="site-loader__logo"><BrandLogo /></div>
      <div className="site-loader__slogan">OVER THE FRONTIER / INTO THE FRONT</div>
      <div className="site-loader__progress">
        <motion.div className="site-loader__progress-bar"
          animate={isLandscape
            ? { height: `${percentage}%`, width: "100%" }
            : { width: `${percentage}%`, height: "100%" }}
          transition={{ type: "tween", duration: 0.5 }} />
        <motion.div className="site-loader__progress-text"
          animate={isLandscape
            ? { top: `${percentage}%`, left: "3.125rem" }
            : { top: "unset", left: `${percentage}%` }}
          transition={{ type: "tween", duration: 0.5 }}
          onUpdate={(values) => {
            if (displayedPercent.current) {
              displayedPercent.current.textContent = String(
                parseInt(String(isLandscape ? values.top : values.left), 10) || 0);
            }
          }}>
          <strong><span ref={displayedPercent}>0</span>%</strong>
          <small>Updating...</small>
        </motion.div>
      </div>
    </div>
  );
}

export const loaderExitCSS = `
.site-loader--leaving { opacity: 0; transition: opacity 1s 1.4s; }
.site-loader--leaving::after {
  content: ""; position: absolute; inset: 0; background: #fffa00;
  transform-origin: left; transform: scaleX(0);
  animation: yellowWipe .6s cubic-bezier(1,0,.7,1) .5s forwards;
}
@keyframes yellowWipe { from { transform: scaleX(0) } to { transform: scaleX(1) } }
`;
