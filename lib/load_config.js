const yaml = require('js-yaml')
const fs = require('fs')
const path = require("path")

const configPath = path.resolve(__dirname,"../_config.yaml")

let config = {}

if(fs.existsSync(configPath)){
    config = yaml.load(fs.readFileSync(configPath))
}

module.exports = config