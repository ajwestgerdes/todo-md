import fs from "fs"

export default function writeMarkdownFile(line) {
    const markdownFilePath = './todo.md'
    const writeStream = fs.createWriteStream(markdownFilePath);

    console.log('lines in writeMarkdownFile')
    console.log(line)

    writeStream.write(`## ${line}\n`);
  
    writeStream.end();
  
    writeStream.on('finish', () => {
      console.log('Markdown file written successfully');
    });
  }