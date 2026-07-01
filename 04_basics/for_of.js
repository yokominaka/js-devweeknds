//for of

// const arr= [1,2,3,4,5]
// for (const val of arr) {
//     console.log(val)
// }
// const greeting ="hello world"

// for (const greet of greeting) {
//     console.log(`each char of ${greeting} is "${greet}"`);
// }

//MAPS 
const map = new Map() 
map.set('PK',"Pakistan")
map.set('USA',"United States")
map.set('FR',"France")
console.log(map)

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
    
// }

const myobject={
    name:"hamza",
    age:19,
    country:"Pakistan"
}

for (const key in myobject) {
    console.log(myobject[key])
}

const programming=["javascript", "python", "java"]
for(const key in programming){
    console.log(programming[key])
}