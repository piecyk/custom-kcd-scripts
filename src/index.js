const path = require('path');
const scriptsPath = path.join(__dirname, 'scripts/');

require('kcd-scripts/dist/run-script')(scriptsPath);
