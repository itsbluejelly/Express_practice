const _ = require('lodash')

const numbers = [1, [2, [3, [4]]]]
const flattenedListOfNumbers = _.flatMapDeep(numbers)

console.log(flattenedListOfNumbers)
console.log("Hello World")