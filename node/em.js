const EventEmitter = require('events')
const emitter = new EventEmitter()

function ping(){
    console.log('Hello')
}
emitter.on('pong',ping)
emitter.once('pong',ping)
emitter.removeListener('pong',ping)

emitter.emit('pong',ping)
emitter.emit('pong',ping)
