const fs = require('fs')
const path = require('path')

console.log("Started first task")

fs.readFile(
    path.join(__dirname, '..', 'lesson_04_built-in_modules', 'textfolder', 'firstText.txt'),
    "utf-8",
    
    (error, data) => {
        if(error){
            console.log(`${error.name}\t${error.message}`)
            return
        }

        console.log(data)
        console.log("Completed first task")
    }
)

console.log("Awaiting first task")