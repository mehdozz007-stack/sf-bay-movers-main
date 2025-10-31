#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'src', 'pages', 'Index.tsx');
if (!fs.existsSync(indexPath)) {
  console.error('Index.tsx not found at', indexPath);
  process.exit(1);
}

const indexSource = fs.readFileSync(indexPath, 'utf8');
// find imports like: import { Header } from "@/components/Header";
const importRegex = /import\s+\{\s*([^}]+)\s*\}\s+from\s+["']@\/components\/([^"']+)["']/g;
let m;
let errors = 0;
const checks = [];
while ((m = importRegex.exec(indexSource)) !== null) {
  const names = m[1].split(',').map(s => s.trim());
  const file = m[2];
  const target = path.join(root, 'src', 'components', `${file}.tsx`);
  checks.push({ names, file, target });
}

checks.forEach(({ names, file, target }) => {
  if (!fs.existsSync(target)) {
    console.error(`Missing component file: ${target}`);
    errors++;
    return;
  }
  const src = fs.readFileSync(target, 'utf8');
  names.forEach(name => {
    const namedExport = new RegExp(`export\\s+(const|function|class)\\s+${name}\\b`);
    const namedExport2 = new RegExp(`export\\s+\{[^}]*\\b${name}\\b[^}]*\}`);
    const defaultExport = new RegExp(`export\\s+default\\s+${name}\\b`);
    if (!(namedExport.test(src) || namedExport2.test(src) || defaultExport.test(src))) {
      console.error(`Export mismatch: component '${file}' does not export '${name}' as a named or default export in ${target}`);
      errors++;
    }
  });
});

if (errors > 0) {
  console.error('\ncheck-exports: FAILED with', errors, 'errors');
  process.exit(1);
}

console.log('check-exports: OK');
process.exit(0);
