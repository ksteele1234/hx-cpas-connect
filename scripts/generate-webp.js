#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

// Configuration
const BLOG_IMAGES_DIR = path.join(process.cwd(), 'public/images/blog');
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];

/**
 * Check if sharp is available (install with: npm install sharp --save-dev)
 */
async function checkSharp() {
  try {
    require('sharp');
    return true;
  } catch {
    console.log('Sharp not found. Installing...');
    try {
      await execAsync('npm install sharp --save-dev');
      console.log('Sharp installed successfully!');
      return true;
    } catch (error) {
      console.error('Failed to install sharp:', error.message);
      return false;
    }
  }
}

/**
 * Convert a single image to WebP using Sharp
 */
async function convertToWebP(inputPath, outputPath) {
  try {
    const sharp = require('sharp');
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
    
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const savings = Math.round(((inputStats.size - outputStats.size) / inputStats.size) * 100);
    
    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% smaller)`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to convert ${path.basename(inputPath)}:`, error.message);
    return false;
  }
}

/**
 * Process all images in the blog directory
 */
async function generateWebPImages() {
  console.log('🖼️  Starting WebP generation for blog images...\n');

  // Check if Sharp is available
  const hasSharp = await checkSharp();
  if (!hasSharp) {
    console.error('Cannot proceed without Sharp. Please install it manually: npm install sharp --save-dev');
    process.exit(1);
  }

  // Ensure the blog images directory exists
  if (!fs.existsSync(BLOG_IMAGES_DIR)) {
    console.log(`Creating blog images directory: ${BLOG_IMAGES_DIR}`);
    fs.mkdirSync(BLOG_IMAGES_DIR, { recursive: true });
  }

  // Get all image files
  const files = fs.readdirSync(BLOG_IMAGES_DIR);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return SUPPORTED_FORMATS.includes(ext);
  });

  if (imageFiles.length === 0) {
    console.log('No images found to convert in', BLOG_IMAGES_DIR);
    return;
  }

  console.log(`Found ${imageFiles.length} images to process:\n`);

  let converted = 0;
  let skipped = 0;

  for (const imageFile of imageFiles) {
    const inputPath = path.join(BLOG_IMAGES_DIR, imageFile);
    const nameWithoutExt = path.parse(imageFile).name;
    const webpPath = path.join(BLOG_IMAGES_DIR, `${nameWithoutExt}.webp`);

    // Skip if WebP version already exists and is newer
    if (fs.existsSync(webpPath)) {
      const inputStats = fs.statSync(inputPath);
      const webpStats = fs.statSync(webpPath);
      
      if (webpStats.mtime >= inputStats.mtime) {
        console.log(`⏭️  Skipping ${imageFile} (WebP already exists and is up to date)`);
        skipped++;
        continue;
      }
    }

    const success = await convertToWebP(inputPath, webpPath);
    if (success) {
      converted++;
    }
  }

  console.log(`\n🎉 WebP generation complete!`);
  console.log(`   • Converted: ${converted} images`);
  console.log(`   • Skipped: ${skipped} images (already up to date)`);
  console.log(`   • Total: ${imageFiles.length} images processed`);
}

// Run the script
if (require.main === module) {
  generateWebPImages().catch(error => {
    console.error('WebP generation failed:', error);
    process.exit(1);
  });
}

module.exports = { generateWebPImages };