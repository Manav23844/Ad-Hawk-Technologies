const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const convertDir = async (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const fullPath = path.join(dir, file);
    
    if (fs.statSync(fullPath).isDirectory()) {
      await convertDir(fullPath);
    } else if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      const parsed = path.parse(fullPath);
      const newPath = path.join(parsed.dir, `${parsed.name}.webp`);
      
      console.log(`Converting ${file} to WebP...`);
      await sharp(fullPath)
        .webp({ quality: 80 })
        .toFile(newPath);
    }
  }
};

(async () => {
  console.log('Starting image optimization...');
  await convertDir(path.join(__dirname, 'src', 'assets'));
  console.log('Finished optimizing images.');
})();
