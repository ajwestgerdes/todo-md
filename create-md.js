"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.addTodo = exports.writeMarkdownFile = void 0;
var fs_1 = require("fs");
function writeMarkdownFile(filePath, line) {
    var writeStream = fs_1["default"].createWriteStream(filePath);
    console.log('lines in writeMarkdownFile');
    console.log(line);
    writeStream.write("## ".concat(line, "\n"));
    writeStream.end();
    writeStream.on('finish', function () {
        console.log('Markdown file written successfully');
    });
}
exports.writeMarkdownFile = writeMarkdownFile;
function addTodo(filename, line, format) {
    var fileContents = fs_1["default"].readFileSync(filename, 'utf8');
    if (fileContents.includes(line))
        return;
    if (format === 1) {
        fs_1["default"].appendFile(filename, ""(templateObject_1 || (templateObject_1 = __makeTemplateObject([" ", " \n "], [" ", " \\n "])), line)(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""]))), function (err) {
            if (err)
                throw err;
            console.log('line appended');
        });
    }
    fs_1["default"].appendFile(filename, "## ".concat(line, " \n"), function (err) {
        if (err)
            throw err;
        console.log('line appended');
    });
}
exports.addTodo = addTodo;
var templateObject_1, templateObject_2;
