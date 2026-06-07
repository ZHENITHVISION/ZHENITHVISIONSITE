import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dirs = [
  '../public/assets/affiches',
  '../public/assets/kakemonos'
];

const optimize = async () => {
  for (const dir of dirs) {
    const fullPath = path.join(process.cwd(), 'scripts', dir);
    if (!fs.existsSync(fullPath)) continue;

    const files = fs.readdirSync(fullPath);
    for (const file of files) {
      if (file.match(/\.(png|jpe?g)$/i)) {
        const inputPath = path.join(fullPath, file);
        const webpPath = path.join(fullPath, `${path.parse(file).name}.webp`);
        
        try {
          await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(webpPath);
          console.log(`Optimized: ${file} -> ${path.parse(file).name}.webp`);
          // Optionally delete old file
          fs.unlinkSync(inputPath);
        } catch (e) {
          console.error(`Error optimizing ${file}:`, e);
        }
      }
    }
  }
};

optimize();
