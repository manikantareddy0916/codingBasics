//LET 
//console.log('a',a) //ERROR
let a = 3
console.log('a',a)

//CONST 
//console.log('b',b) //ERROR
const b = 3
console.log('b',b)

//VAR 
console.log('c',c) // undefined , variable declaration is hoisted, but assignment is not
var c = 3
console.log('c',c)

//FUNCTON
sayHello(); // "Hello, world!"

function sayHello() {
    const j = 'idddd'
    //let j = 'idddd'
    //var j = 'idddd'
  console.log("Hello, world!",j);
}
