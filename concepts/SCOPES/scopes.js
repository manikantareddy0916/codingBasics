//GLOBAL SCOPE
//we can give any like var,let,const
let globalVar = 'I am global';

function myFunction() {
  console.log(globalVar); // Accessible here
}
console.log(globalVar); // Accessible globally


//FUNCTION SCOPE
function myFunction() {
    var localVar = 'I am local';
    console.log(localVar); // Accessible here
}
  
  //console.log(localVar); // Error: localVar is not defined
  

//BLOCK SCOPE
//Variables declared with let or const within a block (enclosed by curly braces) have block scope. They are only accessible within that block.
if (true) {
    
    //var blockVar = 'I am in a block';
    //if u give var it is a globalscope so it will give outside access also
    //in block scope we use only const, let
    let blockVar = 'I am in a block';
    console.log(blockVar); // Accessible here
  }
  
//console.log(blockVar); // Error: blockVar is not defined
  

//Lexical Scope (Closure):
//Lexical scope refers to the ability of a function to access variables from its parent scope, even if the parent function has already finished executing
function outerFunction() {
    //we use any keyword
    let outerVar = 'Outer';
  
    function innerFunction() {
      console.log(outerVar); // Accessible here due to lexical scope
    }
  
    innerFunction();
  }
  
outerFunction(); // Logs: Outer
  
  //