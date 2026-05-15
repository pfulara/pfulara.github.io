/**
 * Deploy `out/` to the gh-pages branch (no gh-pages npm package).
 */
import { execSync } from 'node:child_process';
import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'out');
const branch = process.env.GITHUB_PAGES_BRANCH ?? 'gh-pages';

function run(cmd, cwd = root) {
  execSync(cmd, { cwd, stdio: 'inherit' });
}

function capture(cmd, cwd = root) {
  return execSync(cmd, { cwd, encoding: 'utf8' }).trim();
}

if (!existsSync(outDir)) {
  console.error('Missing out/. Run: npm run build:static');
  process.exit(1);
}

let remote;
try {
  remote = capture('git remote get-url origin');
} catch {
  console.error('No git remote "origin". Add one with: git remote add origin <url>');
  process.exit(1);
}

const deployDir = mkdtempSync(join(tmpdir(), 'portfolio-gh-pages-'));

function copyOut() {
  for (const entry of readdirSync(outDir, { withFileTypes: true })) {
    cpSync(join(outDir, entry.name), join(deployDir, entry.name), {
      recursive: true,
      force: true,
    });
  }
}

function hasChanges() {
  return capture('git status --porcelain', deployDir).length > 0;
}

try {
  let cloned = false;

  try {
    run(`git clone --single-branch --branch ${branch} --depth 1 "${remote}" "${deployDir}"`);
    cloned = true;
    run('git rm -rf .', deployDir);
    run('git clean -fxd', deployDir);
  } catch {
    rmSync(deployDir, { recursive: true, force: true });
    run(`git clone --depth 1 "${remote}" "${deployDir}"`);

    try {
      run(`git checkout ${branch}`, deployDir);
      run('git rm -rf .', deployDir);
      run('git clean -fxd', deployDir);
      cloned = true;
    } catch {
      run(`git checkout --orphan ${branch}`, deployDir);
      run('git rm -rf .', deployDir);
    }
  }

  copyOut();
  run('git add --all --force', deployDir);

  if (!hasChanges()) {
    console.log('No changes to deploy.');
    process.exit(0);
  }

  const message = `Deploy ${new Date().toISOString()}`;
  run(`git commit -m "${message}"`, deployDir);
  run(`git push origin ${cloned ? `HEAD:${branch}` : branch}`, deployDir);

  console.log(`Deployed to branch "${branch}" (${remote}).`);
} finally {
  rmSync(deployDir, { recursive: true, force: true });
}
