import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// Configuration
const TARGET_DIR = path.join(process.cwd(), 'src/assets/img');
const QUALITY = 75;
const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

/**
 * Recursively walk through a directory and find match images.
 * @param {string} dirPath 
 */
async function processDirectory(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            
            if (EXTENSIONS.includes(ext)) {
                await convertToWebp(fullPath);
            }
        }
    }
}

/**
 * Convert a single image to WebP using Sharp.
 * @param {string} filePath 
 */
async function convertToWebp(filePath) {
    const dir = path.dirname(filePath);
    const ext = path.extname(filePath);
    const fileName = path.basename(filePath, ext);
    const outputPath = path.join(dir, `${fileName}.webp`);

    try {
        // Only convert if the webp doesn't exist yet, or if you want to overwrite
        // In this case, we always overwrite to ensure it's updated if the original changed.
        await sharp(filePath)
            .webp({ quality: QUALITY })
            .toFile(outputPath);
            
        console.log(`✅ Converted: ${path.relative(process.cwd(), filePath)} -> ${fileName}.webp`);
    } catch (err) {
        console.error(`❌ Error converting ${filePath}:`, err.message);
    }
}

// Ensure target directory exists
if (!fs.existsSync(TARGET_DIR)) {
    console.error(`❌ Error: Directory ${TARGET_DIR} does not exist.`);
    process.exit(1);
}

console.log(`🚀 Starting WebP conversion in: ${TARGET_DIR}`);
console.log(`🛠 Quality: ${QUALITY}%`);
console.log('---');

processDirectory(TARGET_DIR)
    .then(() => {
        console.log('---');
        console.log('🎉 WebP conversion complete!');
    })
    .catch(err => {
        console.error('❌ Fatal error:', err);
    });
