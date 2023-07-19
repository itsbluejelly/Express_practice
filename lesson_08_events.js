const eventEmitter = require('events')

const customEmitter = new eventEmitter()
customEmitter.on('response', (name, id) => console.log(`Data received on user ${name} with id: ${id}`))
customEmitter.on('response', () => console.log("Some other logic here"))
customEmitter.emit('response', "John", 32)

