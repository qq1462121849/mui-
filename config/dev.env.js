'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
 // BASE_API: '"http://scs.apimember.dev.6djz.net"'
 BASE_API: '"http://scs.apimember.6djz.net"'

})
