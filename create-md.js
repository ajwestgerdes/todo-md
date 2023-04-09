import fs from "fs"

export default function writeMarkdownFile(lines) {
    const markdownFilePath = './'
    const writeStream = fs.createWriteStream(markdownFilePath);
  
    writeStream.write(lines);
  
    lines.forEach(line => {
      writeStream.write(`${line}\n`);
    });
  
    writeStream.end();
  
    writeStream.on('finish', () => {
      console.log('Markdown file written successfully');
    });
  }