const name="hamza"
const age= 19

console.log(`hello ${name}, welcome to the club`)

const gname=new String('hamza')

console.log(gname[0]);
console.log(gname.length);
console.log(gname.toLowerCase());
console.log(gname.charAt(-2)); //what? 
console.log(gname.indexOf('h'));

const url= 'https://linkedin.com/in/humza-naseer'
console.log(url.replace('https://', ''));
console.log(url.includes('linkedin'));
console.log(url.split('/'));

const otherNumber= 23.995
const hundreds= 1000000
console.log(hundreds.toLocaleString('en-PK'))

console.log(otherNumber.toPrecision(4))