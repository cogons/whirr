const config = require('./load_config')
const _ = require('underscore')
let reserved_command = ['help', 'config']


let checkArgv = function(argv) {
    let params = argv._
    return params.length == 2 && config[params[0]]
}

function parseArgs(argv) {
    let _argv = require('minimist')(argv);
    let params = _argv._
    let options = _.omit(_argv, '_');
    if (params.length == 0) {
        return {
            reserved: true,
            command: "help",
            options: options
        }
    } else {

        if (_.indexOf(reserved_command, params[0]) > 0) {

            return {
                reserved: true,
                command: params[0],
                args: params.slice(1),
                options: options
            }

        } else {

            return {
                reserved: false,
                dest: params[0],
                args: params.slice(1),
                options: options
            }

        }



    }
    // if(params.length !== 2) return false
    // if(!config[params[0]]) return false
    // let args = {
    //     "command":,
    //     "type":params[0],
    //     "title":params[1]
    // }

    //return args._

}

module.exports = parseArgs