const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('sum',(a,b) =>{
    sum = a + b;
    console.log(sum)
})

emitter.emit('sum',2,3)