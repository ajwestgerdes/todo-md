"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var create_md_js_1 = require("./create-md.js");
var directoryPath = './testDir';
var markdownFilePath = './todo.md';
function traverseDirectory(dir) {
    var files = fs_1["default"].readdirSync(dir);
    files.forEach(function (file) {
        var filePath = path_1["default"].join(dir, file);
        var stat = fs_1["default"].statSync(filePath);
        if (stat.isDirectory()) {
            traverseDirectory(filePath);
        }
        else {
            console.log(filePath);
            fs_1["default"].readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    console.error(err);
                    return;
                }
                var lines = data.split('\n');
                lines.forEach(function (line) {
                    var file = fs_1["default"].readFileSync('file.js', 'utf8');
                    var multiLineReg = /\/\*([\s\S]*?)\*\//g;
                    var multiLine = file.match(multiLineReg);
                    if (multiLine) {
                        // Write the multiline comment lines to a new file
                        (0, create_md_js_1.addTodo)(markdownFilePath, line, 0);
                    }
                    if (line.includes('// TODO:')) {
                        console.log(line.split('// TODO: '));
                        (0, create_md_js_1.addTodo)(markdownFilePath, line.split('// TODO: ')[1], 0);
                    }
                    if (line.includes('```')) {
                        console.log(line.split('```'));
                        (0, create_md_js_1.addTodo)(markdownFilePath, line.split('```')[1], 1);
                    }
                });
            });
        }
    });
}
traverseDirectory(directoryPath);
