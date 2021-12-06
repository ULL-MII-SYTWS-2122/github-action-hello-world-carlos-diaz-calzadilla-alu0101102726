const core = require("@actions/core");
const fs = require("fs");
const axios = require("axios");
const shell = require("shelljs");

let templateFiles = 'templates/'

const category = core.getInput('category') || 'modulo';
let readme_path = core.getInput('readme_path') || 'README.md';

async function copyReadmeTemplate(categoryReadme, path) {
    switch(categoryReadme) {
        case 'modulo': 
            templateFiles += `${category}.md`
            await fs.copyFile(templateFiles, path, () => {
                console.log("Copied Successfully!");
            });
        break;
        case 'practica': 
            templateFiles += `${category}.md`
            await fs.copyFile(templateFiles, path, () => {
                console.log("Copied Successfully!");
            });
        
        break;
        case 'proyecto': 
            templateFiles += `${category}.md`
            await fs.copyFile(templateFiles, path, () => {
                console.log("Copied Successfully!");
            });
        break;
    }

}

if(fs.existsSync(readme_path)) {
    console.log("El fichero README.md existe");
}
else {
    console.log("Creando fichero README.md...");
    shell.exec(`touch README.md`);
    readme_path = 'README.md';
}

copyReadmeTemplate(category, readme_path)