const user=new Object()  //singleton object

user.id="123"
user.name="hamza"
user.isLoggedIn= false

// console.log(user)

const regUser= {
    email: "humzanaseer07@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Hamza",
            lname: "naseer"
        }
    }
}

// console.log(regUser.fullname?.userfullname.firstname) 
const obj1= {1:"a", 2: "b"}
const obj2= {3:"c", 4: "d"}
const obj4= {5:"c", 6: "f"}

//combining objects 
//method 1: 
// const obj3=Object.assign({},obj1,obj2,obj4) //(target, ....source....)
// console.log(obj3)

//method 2:  spread operator
const obj3= {...obj1,...obj2,...obj4}
console.log(obj3)

//objects within an array:
const users=[
    {userId: 1, userName: "hamza"},
    {userId: 2, userName: "ali"},
    {userId: 3, userName: "ahmed"},
]

users[0].userName="hamza naseer"
console.log(Object.keys(users[0])) //to get the keys of an object
console.log(Object.values(users[0])) 
console.log(Object.entries(users[0]))

const course={
    courseName: "JavaScript",
    coursePrice: 999,
    courseInstructor: {
        name: "hamza",
        email: "hamzanaseer07@gmail.com"
    }
}
//-----------------------
//  OBJECT DESTRUCTURING
//-----------------------
//course.courseInstructor

const {courseInstructor: instructor}=course
const {courseName}=course
console.log(instructor.name);
console.log(courseName)