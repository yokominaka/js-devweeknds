const numbers=[ 1,2,3,4,5,6,7,8,9,10];

// const newNum= numbers.map((num)=> {return num + 10} )
// console.log(newNum)

//              CHAINING 

// const newNum= numbers.map((num) => num*10 ).map((num)=> num+1).filter((num) => num>=n40)
// console.log(newNum)


const electronics=[
    {name:"laptop", price: 1000},
    {name:"mobile", price: 500},
    {name:"tablet", price: 300},
]
const total= electronics.reduce((acc,item) => acc + item.price, 0)
console.log(total)