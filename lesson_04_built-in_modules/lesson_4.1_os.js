const os = require('os')

const user = os.userInfo()

const currentOS = {
    name: os.type(),
    totalMemory: `${os.totalmem()/1000/100000} GB`,
    freeMemory: `${os.freemem()/1000/100000} GB`,
    release: os.release()
}

console.log(user)
console.log(`This system's running uptime is ${os.uptime()} seconds`)
console.log(currentOS)

