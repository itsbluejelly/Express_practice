const path = require('path')

const test1FilePath = path.join(__dirname, '.', 'textfolder', 'subfolder', 'test1.txt')
const base = path.basename(test1FilePath)

console.log(path.sep)
console.log(test1FilePath)
console.log(base)