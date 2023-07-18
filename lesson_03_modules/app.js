const {names} = require('./utils/names')
const greeting = require('./config/greeting')
const {items, person} = require('./utils/names')

const data = [items, person]

require('./config/addNumbers')
console.log(data)
greeting('Susan')
greeting(names)