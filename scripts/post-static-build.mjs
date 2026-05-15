import { existsSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = 'out';

writeFileSync(join(outDir, '.nojekyll'), '\n');

const chunksDir = join(outDir, '_next', 'static', 'chunks');
if (!existsSync(chunksDir)) {
  console.error(
    'ERROR: out/_next/static/chunks/ is missing. CSS/JS will not load on GitHub Pages.',
  );
  process.exit(1);
}

const cssFiles = readdirSync(chunksDir).filter((f) => f.endsWith('.css'));
if (cssFiles.length === 0) {
  console.error('ERROR: No CSS files in the static export.');
  process.exit(1);
}

console.log(
  `Static export OK (${cssFiles.length} stylesheet(s), .nojekyll written).`,
);
