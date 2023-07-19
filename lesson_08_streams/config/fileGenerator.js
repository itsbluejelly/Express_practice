const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises

async function fileGenerator(fileName, maxNumber){
    try{
        if(typeof maxNumber !== "number"){
            throw new Error("2nd parameter must be a number")
        }else if(typeof fileName !== "string"){
            throw new Error("1st parameter must be a string")
        }

        if(!fs.existsSync(path.join(__dirname, '..', 'textfolder'))){
            fsPromises.mkdir(path.join(__dirname, '..', 'textfolder'))
        }

        for(let i = 0; i < maxNumber; i++){
            fs.appendFileSync(path.join(__dirname, '..', 'textfolder', fileName), `Hello World ${i}\n`, "utf-8")
        }
    }catch(error){
        console.log(`${error.name}:\t${error.message}`)
    }
}

module.exports = fileGenerator