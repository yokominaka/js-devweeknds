// Object.create (constructor method to create an object) => singleton

// literal method =>  const user= {}   => non-singleton 
const mySymbol = Symbol("key1")
const user={
    name: "hamza",
    [mySymbol]: "myKey1",  // syntax to write symbols
    age: 19,
    location: "Lahore",
    email: "humza07@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "friday"]
}
// accessing object elements

// console.log(user.email) // valid
// // console.log(user[email]) // invalid since the key email is a string; JS treats it as a string key
// console.log(user["email"])
// console.log(user[mySymbol])

user.email= "humzanaseer07@gmail.com"
// Object.freeze(user)
user.email= "humzanaseer7@gmail.com"
console.log(user)

user.greeting= function(){
    console.log("Hello user")
}
user.greetingTwo= function(){
    console.log(`Hello user, ${this.age}`)
}


console.log(user.greeting())
console.log(user.greetingTwo())