#!/usr/bin/env node

const path = require('path')

const fromSrc = (...p) => path.join(__dirname, ...p)

process.env.KCD_SCRIPTS_CUSTOM_SCRIPTS_PATH = fromSrc('scripts/')
process.env.KCD_SCRIPTS_CUSTOM_CONFIG_PATH = fromSrc('config/')

require('kcd-scripts/dist/index')
