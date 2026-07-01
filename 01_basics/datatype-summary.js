//primitive data types
// types: string, number, boolean, undefined, null, symbol, bigint
//what are primitive data types?: 
// Primitive data types are the most basic data types in JavaScript. They are immutable, meaning their values cannot be changed once created.

// Stack(primitive) , heap(non-primitive)

//reference data types(not primitive data types)
// types: object, array, function  
//what are reference data types?: 
// Reference data types are data types that store a reference to an object in memory. They are mutable, meaning their values can be changed after creation.
const myobj={
    name:"hamza",
    age: 19
};
console.log(myobj.name);
console.log(myobj['age']);

const myfunction= function(){
    console.log("helloowrld");
}