const sh = require('shelljs')
const colors = require('./colors.json')

Object
  .keys(colors.dark)
  .forEach((name) => {
    // sh.sed('-i', colors.dark[name], colors.light[name], './themes/bluloco-light.tmTheme')
    sh.sed('-i', colors.dark[name], colors.light[name], './themes/bluloco-light-color-theme.json')
  })
