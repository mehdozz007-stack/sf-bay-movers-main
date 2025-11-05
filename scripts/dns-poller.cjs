#!/usr/bin/env node
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG = path.resolve(process.cwd(), 'dns_poll.log');
const RUNS = 24;
const INTERVAL_MS = 60 * 60 * 1000; // 1 hour

function append(line) {
  fs.appendFileSync(LOG, line + '\n');
}

function runCheck(attempt) {
  const header = `=== ${new Date().toISOString()} (attempt ${attempt}) ===`;
  append(header);
  const cmds = [
    'echo "--- system nslookup www.sf-moving.com ---"',
    'nslookup www.sf-moving.com || true',
    'echo "--- nslookup www.sf-moving.com @1.1.1.1 ---"',
    'nslookup www.sf-moving.com 1.1.1.1 || true',
    'echo "--- nslookup www.sf-moving.com @8.8.8.8 ---"',
    'nslookup www.sf-moving.com 8.8.8.8 || true',
    'echo "--- system nslookup sf-moving.com ---"',
    'nslookup sf-moving.com || true',
    'echo "--- nslookup sf-moving.com @1.1.1.1 ---"',
    'nslookup sf-moving.com 1.1.1.1 || true',
    'echo "--- nslookup sf-moving.com @8.8.8.8 ---"',
    'nslookup sf-moving.com 8.8.8.8 || true',
    'echo "--- curl -I https://www.sf-moving.com ---"',
    'curl -I -L --max-time 30 https://www.sf-moving.com || echo "curl missing or request failed"',
    'echo "--- curl -I https://sf-moving.com ---"',
    'curl -I -L --max-time 30 https://sf-moving.com || echo "curl missing or request failed"',
    'echo "----"'
  ];

  const full = cmds.join(' && ');
  exec(full, { maxBuffer: 1024 * 2048 }, (err, stdout, stderr) => {
    if (stdout) append(stdout.trim());
    if (stderr) append('STDERR: ' + stderr.trim());
    if (err) append('ERROR: ' + (err.message || String(err)));
  });
}

function main() {
  append('Starting dns-poller at ' + new Date().toISOString());
  let count = 0;
  runCheck(++count);
  const timer = setInterval(() => {
    if (count >= RUNS) {
      append('Completed all runs at ' + new Date().toISOString());
      clearInterval(timer);
      return;
    }
    runCheck(++count);
  }, INTERVAL_MS);
}

main();
