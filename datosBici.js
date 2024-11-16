const fs = require("fs");

function escribirArchivo(){
const json = fs.readFileSync("./bicicletas.json",'utf-8')
return JSON.parse(json)
}

module.exports = escribirArchivo;