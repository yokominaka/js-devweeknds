const user ={
    username: "hamza",
    age: 19,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome!`);
    }
}

// user.welcomeMessage()


// -----------------------------------------------------
//                  arrow function
// -----------------------------------------------------

// const chai = () => {
//     let username="hamza"
//     console.log(this);
// }

// chai()


//EXPLICIT RETURN 
// const addtwo = (num1,num2) =>{
//     return num1 + num2
// }

// console.log(addtwo(3,4))


//IMPLICIT RETURN (no parenthesis) and no need for return keyword.

const addtwo = (num1,num2) => num1 + num2
const addtwo = (num1,num2) => (num1 + num2)

console.log(addtwo(3,4))
