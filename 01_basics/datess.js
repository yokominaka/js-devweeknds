let myDate= new Date()

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString('en-PK'))
// console.log(myDate.toLocaleString('en-PK'))
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())
// console.log(typeof myDate) //date is an object

let myCreateDate= new Date()

let myTimeStamp= Date.now()
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(myCreateDate.getMonth() + 1)

// console.log(Math.floor(Date.now()/1000))

myCreateDate.toLocaleString('default',{
    weekday: "long",
    timeZone: 'Asia/Karachi'
} )
console.log(myCreateDate.toLocaleString('default',{
    weekday: "long",
    day: "numeric",
    timeZone: 'Asia/Karachi',
    month: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "long"
} ))
