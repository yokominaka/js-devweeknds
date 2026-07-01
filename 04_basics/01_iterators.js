// for (let i = 0; i <10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }


// for (let i = 0; i <=10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <=10; j++) {
//         console.log(`inner loop value: ${j}`);
        
//     }
// }

//break and continue 

for(let i = 0; i <=10; i++){
    if(i==5){
        console.log(`deteted ${i}`);
        continue
    }
    console.log(`value of i is ${i}`);
}

// let index = 0

// while (index<=10){
//     console.log(`value of index is ${index}`);
//     index = index + 2
// }
let myarray = [ 1,2,3,4,5,6,7,8,9]

let arr=0
while(arr< myarray.length){
    console.log(myarray[arr]);
    arr++;
}