import fs from 'fs'
import path from 'path'
import writeMarkdownFile from './create-md.js';

const directoryPath = './testDir';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);

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
  });
});