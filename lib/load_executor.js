const path = require("path")


let loadExecutor = function(name){

    let pluginPath = path.resolve(__dirname,"executors",name)

    let executor = require(pluginPath)

    return executor

}

module.exports = loadExecutor