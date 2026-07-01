// const myNums=[1,2,3,4,5,6,7,8,9,10];

// const newNums= myNums.filter((num)=> {
//     return num>5;
// });
// console.log(newNums);

// make a books object
const books=[
    {title:"book1", author:"author1", year:2001},
    {title:"book2", author:"author2", year:2002},
    {title:"book3", author:"author3", year:2003},
]

// const mybook= books.filter((bk)=> bk.title==='book1')
const mybook= books.filter((bk)=> bk.year>="2002")

console.log(mybook)