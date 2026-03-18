const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'src');
const DIST = path.join(__dirname, 'dist');
const PARTIALS = path.join(__dirname, '_partials');

// Clean dist
if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true });
fs.mkdirSync(DIST, { recursive: true });

// Read partials
const header = fs.readFileSync(path.join(PARTIALS, 'header.html'), 'utf8');
const footer = fs.readFileSync(path.join(PARTIALS, 'footer.html'), 'utf8');

// Process HTML files in src/
function processDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const srcPath = path.join(dir, entry.name);
    const relPath = path.relative(SRC, srcPath);
    const distPath = path.join(DIST, relPath);
    if (entry.isDirectory()) {
      fs.mkdirSync(distPath, { recursive: true });
      processDir(srcPath);
    } else if (entry.name.endsWith('.html')) {
      let content = fs.readFileSync(srcPath, 'utf8');
      content = content.replace('<!-- HEADER -->', header);
      content = content.replace('<!-- FOOTER -->', footer);
      fs.mkdirSync(path.dirname(distPath), { recursive: true });
      fs.writeFileSync(distPath, content);
      console.log('  html:', relPath);
    }
  }
}
processDir(SRC);

// Copy static assets
const STATIC = ['assets', 'styles.css', 'site.js', 'robots.txt', 'sitemap.xml', 'CNAME'];
function copyRecursive(src, dest) {
  if (fs.statSync(src).isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}
for (const name of STATIC) {
  const src = path.join(__dirname, name);
  if (fs.existsSync(src)) {
    copyRecursive(src, path.join(DIST, name));
    console.log('  copy:', name);
  }
}
console.log('Build complete.');
