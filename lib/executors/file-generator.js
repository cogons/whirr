const fs = require('fs-extra')
const path = require('path')
const untildify = require('untildify');
const execSync = require('child_process').execSync;
const chalk = require('chalk');

let executor = function(config,args,options){

    let filename = config.extension?args[0]+"."+config.extension:args[0]+""

    let destPath = untildify(config.path)
    let scaffoldPath = path.resolve(destPath,".scaffold")
    let filePath = config.extension?path.resolve(destPath,filename):path.resolve(destPath,filename)
    
    if (fs.existsSync(scaffoldPath)) {
        fs.copySync(scaffoldPath, filePath)
    
    } else fs.writeFileSync(filePath, "Whirrrr!")

    console.log(chalk.green("Whirrrr! file is generated."));
    console.log(chalk.green(filePath));

    if(config.openWith){

        execSync(config.openWith+" "+filePath)

    }



}


module.exports = executor