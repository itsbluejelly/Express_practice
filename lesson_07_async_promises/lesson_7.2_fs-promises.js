const path = require('path')
const fs = require('fs').promises

const firstTextFilePath = path.join(__dirname, '..', 'lesson_04_built-in_modules', 'textfolder', 'firstText.txt')
const secondTextFilePath = path.join(__dirname, '..', 'lesson_04_built-in_modules', 'textfolder', 'secondText.txt')
const resultFilePath = path.join(__dirname, '..', 'lesson_04_built-in_modules', 'textfolder', 'resultText.txt')

async function fileReader(...listOfFilePaths){
    const listOfContents = []

    try{
        for(let i = 0; i < listOfFilePaths.length; i++){
            const content = await fs.readFile(listOfFilePaths[i], "utf-8")
            i === listOfFilePaths.length - 1 ? listOfContents.push(`${content}, `) : listOfContents.push(`${content}`)
        }
        
        fs.appendFile(resultFilePath, `INCOMING:\t${listOfContents}\n`)
        console.log(`${listOfContents}`)
    }catch(error){
        console.log(`${error.name}:\t ${error.message}`)
    }
}

fileReader(firstTextFilePath, secondTextFilePath)