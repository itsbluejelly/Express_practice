function greeting(listOfNames){
    if(typeof listOfNames === "object"){
        for(let name of listOfNames){
            console.log(`Hello there ${name}`)
        }
    }else{
        console.log(`Hello there ${listOfNames}`)
    }
}

module.exports = greeting