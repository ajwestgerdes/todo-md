import fs from "fs"

export function writeMarkdownFile(filePath: string, line: string) {
    
    const writeStream = fs.createWriteStream(filePath);

    console.log('lines in writeMarkdownFile')
    console.log(line)

    writeStream.write(`## ${line}\n`);
  
    writeStream.end();
  
    writeStream.on('finish', () => {
      console.log('Markdown file written successfully');
    });
  }


  export function addTodo(filename: string, line: string, format: number) {

    const fileContents = fs.readFileSync(filename, 'utf8');
    if (fileContents.includes(line)) return

    if(format === 1) {
      fs.appendFile(filename, ``` ${line} \n ```, (err) => {
        if (err) throw err;
        console.log('line appended');
      });
    }


    fs.appendFile(filename, `## ${line} \n`, (err) => {
      if (err) throw err;
      console.log('line appended');
    });
  }