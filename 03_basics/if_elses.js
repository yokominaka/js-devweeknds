const userloggedin= true

if(userloggedin){

}

//falsy values:
//- false, 0, -0, BigInt 0n, ""(empty string), null, undefined, NaN

//truthy values
//"0" , 'false'(non-empty string), "_space_" , [], {}, function (){} (Empty function)

//checking if an object is empty:

const userobj = {}

if(Object.keys(userobj).length===0){
    console.log(" object is empty");
}


//nullish coalescing operator (??) => returns the right value if the left value is null or undefined

const user = { 
    name: "hamza",
    age: 19,
    email: null
}

// console.log(user.email ?? "Email is not provided");
let val1;

val1 = null ?? 10
console.log(val1)


// condition ? true : false

const iceTea = 100
iceTea >=80 ? console.log("less than 80") : console.log("greater than 80")