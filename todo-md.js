import fs from "fs"
import path from "path"
import writeMarkdownFile from "./create-md.js";

const directoryPath = './testDir';

fs.readdir(directoryPath, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    const filePath = path.join(directoryPath, file);

    const stream = fs.createReadStream(filePath, { highWaterMark: 64 * 1024 });

    let remaining = '';

    stream.on('data', chunk => {
      const lines = (remaining + chunk).split('\n');
      remaining = lines.pop();

      lines.forEach(line => {
        if (line.includes('TODO:')) {
            writeMarkdownFile(line)
        }
        console.log(line)
      });
    });

    stream.on('end', () => {
      if (remaining) {
        console.log('new line end')
      }
    });
  });
});