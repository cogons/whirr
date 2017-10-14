const fs = require('fs-extra')
const path = require('path')
const untildify = require('untildify');
const execSync = require('child_process').execSync;
const chalk = require('chalk');

let executor = function(config,args,options){
    let repo = args[0]
    try{
        execSync(`cd ${config.path};git clone ${repo}`)
        let repoName = repo.replace(/\S+\//,"").replace(".git","")
        console.log(chalk.green("Whirr! Git successfully cloned."))
        console.log(chalk.green(`${config.path}/${repoName}`))
    } catch(err){
        //console.log(chalk.red(err))
    }
}

module.exports = executor