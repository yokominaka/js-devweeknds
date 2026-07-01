// function add(num1, num2){
//     console.log(num1 + num2)
// }

const { useReducer } = require("react")

function add(num1, num2){

    return num1 + num2
}

const result = add(3,5)
// console.log(result)

function loginUserMessage(userName="default user"){
    if(!userName){
        console.log("please enter a username")
        return
    }
    return `${userName} just logged in!`
}

// console.log(loginUserMessage(""))


function calculateCartPrice(...num1){ //rest operator to take multiple arguments in a function and return them as an array
    return num1
}

function calculateCartPrice(val1,val2,...num1){ //val1 and val2 are normal parameters, num1 is a rest parameter that takes the rest of the arguments as an array
    return num1
}

// console.log(calculateCartPrice(20,303,20))

const myCart=[20,30,40,50]

function returnSecondValue(array){
    return array[1]
}

// console.log(returnSecondValue(myCart))
//------------------------------------------
//------------------------------------------
//------------------------------------------
//------------------------------------------

function one(){
    const username="hamza"

    function two(){
        const website="youtube"
        console.log(username)
    }
    console.log(website)
    two()
}

one()