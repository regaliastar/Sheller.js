# Sheller.js
解析命令行的简化方案，灵感来自 [Commander](https://github.com/tj/commander.js)

## Install
```
npm install Sheller.js
```
## Quick start
```
// see test.js
const _package = require('./package.json')
const { Sheller } = require('Sheller.js')

const sheller = new Sheller()

sheller
    .version(_package.version)
    .name('app')
    .usage('[options]')
    .setCmdHeader('app')
    .option('-s', 'save info', () => {
        console.log('in hook func -s')
    })
    .option('-q', 'quit system', () => {
        console.log('in hook func -q')
    })
    .option('-h', 'help info', () => {
        console.log('in hook func -h')
    })

sheller.parse('app -h -s', {from: 'user'})
```
