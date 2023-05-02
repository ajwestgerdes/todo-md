import fs from "fs"

export function writeMarkdownFile(filePath, line) {
    
    const writeStream = fs.createWriteStream(filePath);

    console.log('lines in writeMarkdownFile')
    console.log(line)

    writeStream.write(`## ${line}\n`);
  
    writeStream.end();
  
    writeStream.on('finish', () => {
      console.log('Markdown file written successfully');
    });
  }


  export function addTodo(filename, lines, format) {
    console.log(lines)
    console.log(`## ${lines}`)

    if(format === 1) {
      fs.appendFile(filename, `${lines} \n`, (err) => {
        if (err) throw err;
        console.log('line appended');
      });
    }


    fs.appendFile(filename, `## ${lines} \n`, (err) => {
      if (err) throw err;
      console.log('line appended');
    });
  }