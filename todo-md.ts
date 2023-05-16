import fs from 'fs'
import path from 'path'
import {writeMarkdownFile, addTodo} from './create-md.js';

const directoryPath = './testDir';
const markdownFilePath = './todo.md'

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
          const file = fs.readFileSync('file.js', 'utf8');
          const multiLineReg = /\/\*([\s\S]*?)\*\//g;
          const multiLine = file.match(multiLineReg);

          if (multiLine) {
            // Write the multiline comment lines to a new file
            addTodo(markdownFilePath, line, 0)
          }

          if (line.includes('// TODO:')) {
            console.log(line.split('// TODO: '))
            addTodo(markdownFilePath, line.split('// TODO: ')[1], 0)
          }
          if (line.includes('```')) {
            console.log(line.split('```'))
            addTodo(markdownFilePath, line.split('```')[1], 1)
          }
        });
      });
    }
  });
}


traverseDirectory(directoryPath);