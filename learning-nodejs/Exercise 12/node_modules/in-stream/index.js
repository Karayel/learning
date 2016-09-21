// in-stream
fs    = require('fs')
argv  = argv = require('minimist')(process.argv.slice(2))

options = { 
  flags:     'r',
  encoding:  'utf8',
  mode:      0444,
  autoClose: true
}

inStream = (argv.f) ? fs.createReadStream(argv.f, options) : process.stdin

module.exports = inStream