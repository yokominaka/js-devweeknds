const names1 =["hamza","ali", "ahmed", "hassan"];
const names2 =["subhan","umer", "bilal", "hussain"];

// names1.push(names2)

// console.log(names1)
// console.log(names1[4][0])

//spread operator
const combinedArray=[...names1,"noor",...names2]

console.log(combinedArray)

// .flat to concatenate arrays in an array in a single array 

// const totalarray.flat(Infinity) 

let s1= 100;
let s2= 200;
let s3= 300;

let s_total= Array.of(s1,s2,s3)
let s_array=Array.from("hamza")

console.log(s_total)
console.log(s_array)
