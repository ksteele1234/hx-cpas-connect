# WebP Image Generation Scripts

This directory contains scripts for optimizing blog images by generating WebP versions.

## WebP Generation Script

### Usage

```bash
# Generate WebP versions of all blog images
node scripts/generate-webp.js

# Or if you have npm scripts set up:
npm run webp
```

### What it does

- Automatically converts all JPG, JPEG, and PNG images in `public/images/blog/` to WebP format
- Uses Sharp library for high-quality image conversion
- Skips images that already have up-to-date WebP versions
- Provides detailed conversion statistics and file size savings
- Maintains original images alongside WebP versions

### Requirements

- Sharp library (automatically installed when script runs)
- Node.js 14+ 

### Integration

The `OptimizedImage` component automatically serves WebP versions when:
- Browser supports WebP format
- WebP version exists in the same directory
- Falls back to original image if WebP fails to load

### Performance Benefits

- **25-35% smaller file sizes** compared to JPEG/PNG
- **Faster page load times** and better Core Web Vitals scores
- **Automatic fallback** for browsers that don't support WebP
- **Zero configuration** - works automatically with existing images

### Adding New Images

1. Add your JPG/PNG images to `public/images/blog/`
2. Run `node scripts/generate-webp.js` 
3. WebP versions are automatically generated and used by the site

### Build Integration

The script can be integrated into your build process:

```bash
# Generate WebP images before building
node scripts/generate-webp.js && npm run build
```