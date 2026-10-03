// Split each webpack chunk into its numbered modules, record dependencies and hints.
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';
import _generate from '@babel/generator';
import * as prettier from 'prettier';
const traverse = _traverse.default ?? _traverse; const generate = _generate.default ?? _generate;
const root = new URL('..', import.meta.url).pathname;
const outRoot = join(root, 'source', 'modules'); mkdirSync(outRoot, { recursive: true });
const graph = {};
for (const name of readdirSync(join(root, 'capture', 'js'))) {
  const src = readFileSync(join(root, 'capture', 'js', name), 'utf8');
  let ast; try { ast = parse(src, { sourceType: 'script', errorRecovery: true }); } catch (e) { console.log('PARSE FAIL', name, String(e).slice(0,120)); continue; }
  const chunk = name.replace(/\.js$/, '');
  const dir = join(outRoot, chunk); mkdirSync(dir, { recursive: true });
  let count = 0;
  // Find the module map: an ObjectExpression whose keys are numeric (or string) and values are functions.
  traverse(ast, {
    ObjectExpression(path) {
      const props = path.node.properties;
      if (props.length < 1) return;
      const isModuleMap = props.every(p => p.type === 'ObjectProperty' && (p.key.type === 'NumericLiteral' || p.key.type === 'StringLiteral') && (p.value.type === 'FunctionExpression' || p.value.type === 'ArrowFunctionExpression'));
      if (!isModuleMap) return;
      for (const p of props) {
        const id = String(p.key.value);
        const fn = p.value;
        const params = fn.params.map(x => x.name || '?');
        // dependencies: calls to the 3rd param (require) with a numeric literal
        const deps = new Set(); const exportsNames = new Set(); const cssClasses = new Set(); const strings = [];
        const req = params[2];
        const inner = parse('(' + src.slice(fn.start, fn.end) + ')', { sourceType: 'script', errorRecovery: true });
        traverse(inner, {
          CallExpression(q) {
            const c = q.node.callee;
            if (req && c.type === 'Identifier' && c.name === req && q.node.arguments[0] && q.node.arguments[0].type === 'NumericLiteral') deps.add(q.node.arguments[0].value);
            if (req && c.type === 'MemberExpression' && c.object.type === 'Identifier' && c.object.name === req && c.property.name === 'd' && q.node.arguments[1] && q.node.arguments[1].type === 'ObjectExpression') {
              for (const pp of q.node.arguments[1].properties) if (pp.key) exportsNames.add(pp.key.name || pp.key.value);
            }
          },
          StringLiteral(q) {
            const v = q.node.value;
            if (/^[A-Za-z0-9_-]+__[A-Za-z0-9_]{5}$/.test(v) && v.includes('_')) cssClasses.add(v);
            else if (v.length > 3 && v.length < 120 && strings.length < 40 && /[A-Za-z]{3}/.test(v)) strings.push(v);
          }
        });
        const body = src.slice(fn.start, fn.end);
        graph[id] = graph[id] || {};
        graph[id] = { chunk, bytes: body.length, params, deps: [...deps].sort((a,b)=>a-b), exports: [...exportsNames], cssClasses: [...cssClasses].slice(0, 60), strings: strings.slice(0, 25) };
        writeFileSync(join(dir, id + '.js'), `// module ${id} from ${name}\n// deps: ${[...deps].join(', ')}\nconst module_${id} = ${body};\n`);
        count++;
      }
    }
  });
  console.log(name, 'modules:', count);
}
writeFileSync(join(root, 'source', 'module-graph.json'), JSON.stringify(graph, null, 1));
console.log('total modules', Object.keys(graph).length);
