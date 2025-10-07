// Script to find unused images in the 'img' folder
// Scans all HTML, JS, and MJS files for references to images in 'img/'
// Outputs a list of unused image files


import fs from 'fs';
import path from 'path';


const __dirname = path.resolve();
const IMG_DIR = path.join(__dirname, 'img');
const SEARCH_EXTENSIONS = ['.html', '.js', '.mjs'];

// Get all image files in img/
function getAllImages(dir) {
    return fs.readdirSync(dir).filter(f => /\.(png|jpg|jpeg|gif|bmp|svg|webp)$/i.test(f));
}

// Recursively get all files with SEARCH_EXTENSIONS
function getAllFiles(dir, exts) {
    let results = [];
    fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results = results.concat(getAllFiles(fullPath, exts));
        } else if (exts.includes(path.extname(entry.name))) {
            results.push(fullPath);
        }
    });
    return results;
}

// Main
const allImages = getAllImages(IMG_DIR);
const allFiles = getAllFiles(__dirname, SEARCH_EXTENSIONS);

// Read all file contents into one string
const allContent = allFiles.map(f => fs.readFileSync(f, 'utf8')).join('\n');

const unused = allImages.filter(img => !allContent.includes('img/' + img));

console.log('Unused images in img/:');
unused.forEach(img => console.log(img));
