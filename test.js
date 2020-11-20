'use strict'

const _package = require('./package.json')
const { Sheller } = require('./Sheller')

const sheller = new Sheller()
try{
    sheller
        .version(_package.version)
        .name('QSim')
        .usage('[options]')
        .setCmdHeader('qsim')
        .option('-s', 'save info', () => {
            console.log('in hook func -s')
        })
        .option('-q', 'quit system', () => {
            console.log('in hook func -q')
        })
        .option('-h', 'help info', () => {
            console.log('in hook func -h')
        })

    sheller.parse('qsim -h -s -s', {from: 'user'})

    if(sheller.options['-s'].call){
        console.log('call -s')
    }

    if(sheller.options['-h'].call){
        console.log('call -h')
    }

} catch(e) {
    console.log('catch', e)
}
