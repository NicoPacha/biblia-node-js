const Emitter = require('./emiter');

const emitter = new Emitter();

emitter.on('save', () => {
    console.log('On save activated 1');
});

emitter.on('save', () => {
    console.log('On save activated 2');
});

emitter.emit('save');
