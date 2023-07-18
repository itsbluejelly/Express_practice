function addNumbers(...numbers){
    let sum = 0

    try{
        for(let number of numbers){
            if(typeof number !== 'number'){
                throw new Error("Sorry, only works for numbers")
            }else{
                sum += number
            }
        }

        console.log(`the sum of [${numbers}] is ${sum}`)
    }catch(error){
        console.log(`${error.name}: ${error.message}`)
    }
}

addNumbers(1, 1.1)