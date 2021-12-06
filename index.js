const core = require("@actions/core");
const fs = require("fs");
const shell = require("shelljs");

let templateFiles = 'templates/'

const template = core.getInput('template') || 'modulo';
let readme_path = core.getInput('readme_path') || 'README.md';

async function copyReadmeTemplate(templateReadme, path) {
     
    templateFiles += `${templateReadme}.md`
    await fs.copyFile(templateFiles, path, (err) => {
        if (err) throw err;
        console.log("Copied Successfully!");
    });

}

if(fs.existsSync(readme_path)) {
    console.log("El fichero README.md existe");
}
else {
    console.log("Creando fichero README.md...");
    shell.exec(`touch README.md`);
    readme_path = 'README.md';
}

copyReadmeTemplate(template, readme_path)
