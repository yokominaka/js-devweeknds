const coding=["html","css","javascript","react","nodejs"];

coding.forEach(function (item){
    console.log(item.toUpperCase());
} )  //a callback function does not have a name 

// coding.forEach((item, index , arr)=>{
//     console.log(item, index, arr)
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme) //pass the function as a callback function

const mycoding=[
    {
        language:"javascript",
        framework:"react"

    },
    {
        language:"python",
        framework:"django"

    },
    {
        language:"java",
        framework:"spring"
    }
]

// mycoding.forEach((item)=>{
//     console.log(`language is ${item.language} and framework is ${item.framework}`);
// })

mycoding.forEach((item)=>{
    console.log(`language is ${item.language} and framework is ${item.framework}`);
})