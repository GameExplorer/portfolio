const fs = require('fs-extra');
const path = require('path');

async function mergeOutputs() {
  // Path to your Vue app build output
  const vueDistPath = path.join(__dirname, '../dist');
  
  // Path to your VitePress build output
  const docsDistPath = path.join(__dirname, '../docs/.vitepress/dist');
  
  // Create docs directory in the main dist folder
  const docsTargetPath = path.join(vueDistPath, 'docs');
  
  try {
    // Ensure the target directory exists
    await fs.ensureDir(docsTargetPath);
    
    // Copy VitePress build output to the docs subdirectory
    await fs.copy(docsDistPath, docsTargetPath);
    
    console.log('Successfully merged Vue and VitePress builds!');
  } catch (err) {
    console.error('Error merging builds:', err);
    process.exit(1);
  }
}

mergeOutputs();