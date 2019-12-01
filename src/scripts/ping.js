const { ifAnyDep } = require('kcd-scripts/dist/utils')

const usingTs = ifAnyDep(['typescript'], true, false)

console.log('pong!', { usingTs })
