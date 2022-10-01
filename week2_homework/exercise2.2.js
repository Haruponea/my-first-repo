const fs = require("fs");
const path = require("path");
const util = require("util");

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

const printJsFile = async (directory) => {
    const files = await readdir(directory);
    for (let i = 0; i < files.length; i++) {
        const filepath = path.join(directory, files[i]);
        const filestat = await stat(filepath);
        if (filestat.isDirectory() === true) {
            await printJsFile(filepath);
        } else {
            if (path.extname(filepath) === ".js") console.log(filepath);
        }
    }
};

try {
    printJsFile("./");
} catch (e) {
    console.error(e);
}
