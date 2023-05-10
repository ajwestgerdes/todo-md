import vscode from "vscode"
import path from "path"
import { spawn } from "child_process"

function activate(context) {
  console.log('Congratulations, your extension is now active!');

  let disposable = vscode.commands.registerCommand('extension.runScript', function () {
    const scriptPath = path.join(context.extensionPath, 'src', 'todo-md.js');
    const child = spawn('node', [scriptPath]);

    child.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    child.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    child.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
  });

  context.subscriptions.push(disposable);
}

exports.activate = activate;