const fs = require('fs')
const path = require('path')

console.log("Start")

fs.readFile(path.join(__dirname, '.', 'textfolder', 'firstText.txt'), 'utf-8', (error, data) => {
    if(error){
        console.log(`${error.name}: ${error.message}`)
        return
    }

    const firstText = data

    fs.readFile(path.join(__dirname, '.', 'textfolder', 'secondText.txt'), 'utf-8', (error, data) => {
        if(error){
            console.log(`${error.name}: ${error.message}`)
            return
        }

        const secondText = data

        fs.writeFile(
            path.join(__dirname, '.', 'textfolder', 'resultText.txt'), 
            `Here is the result: ${firstText}, ${secondText}`, 
            'utf-8',
           
            error => {
                if(error){
                    console.log(`${error.name}: ${error.message}`)
                    return
                }

                console.log("Finished Task")
            }
        )
    })
})

console.log("On to the next")