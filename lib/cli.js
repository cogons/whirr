const argv = require('./args')(process.argv.slice(2));
const path = require("path")

let cli = function() {

    if (argv.reserved) {

        if (argv.command == 'config') {
            console.log(path.resolve(__dirname, "../_config.yaml"))
        }

    } else {

        let { dest, args, options } = argv

        let config = require('./load_config')[dest]

        require('./load_executor')(config.executor)(config, args, options)



    }

}

module.exports = cli