export const tailConfig = preval`
const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('../tailwind.config.js')
const fullConfig = resolveConfig(tailwindConfig)
  module.exports = fullConfig
`
