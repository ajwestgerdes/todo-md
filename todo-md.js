import fs from 'fs'
import path from 'path'
import writeMarkdownFile from './create-md.js';

const directoryPath = './testDir';

function traverseDirectory(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      traverseDirectory(filePath);
    } else {
      console.log(filePath);
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
  
        const lines = data.split('\n');
  
        lines.forEach((line) => {
          if (line.includes('// TODO:')) writeMarkdownFile(line)
        });
      });
    }
  });
}

traverseDirectory(directoryPath);