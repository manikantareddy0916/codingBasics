//display the positive numbers using filter function
let number = [10,50,-10,-20]
const data = number.filter((ele) =>{
    return ele > 0
})
console.log('data',data)

// find the sum of all the array element using reduce method
let number2 = [10,80,40,30,50] 
const data2 = number2.reduce((ele,ele2)=>{
    return ele+ele2
},0)
console.log('data2',data2)

// explain this using array destructuring
let people = ['raju', 'reju', 'suku']
let [, person2, person3] = people;
console.log('array Destructure',people[0])
console.log('array Destructure',person2)
//explain this using object destructing
let person = {name: 'raju', age: 30}
let {name , age}= person 
console.log('object Destructure', age)
console.log('object Destructure', person.age)

//Finding duplicates from array
//print duplicate   
let dup = ['a','b','c','a','d','e','f']
let result =[]
let duplicate =[]
for(let i=0 ; i<dup.length; i++){
    if(dup.indexOf(dup[i]) == dup.lastIndexOf(dup[i])){
        result.push(dup[i])
    }else{
        duplicate.push(dup[i])
    }
}
console.log('res',result)//res [ 'b', 'c', 'd', 'e', 'f' ]
console.log('dupli',duplicate)//dupli [ 'a', 'a' ]
//array method
let res = []
const dataDup = dup.map((ele,i)=>{
   //console.log('j',dup.indexOf(ele),ele)
    if((dup.indexOf(dup[i]) == dup.lastIndexOf(dup[i]))){
        //console.log('e',dup[i])
        res.push( dup[i])
    }

})
console.log(res,'res')//[ 'b', 'c', 'd', 'e', 'f' ] res

//Reversing a string
let stri= 'abcdefg'
console.log('reverse',stri)
let strdata=''
for(let i of stri){
    strdata = i + strdata 
}
console.log('reverseFOR',strdata)
console.log('reverse',stri.split('').reverse().join(''))

//Converting normal function to arrow function.
function add(a, b) {
    return a + b;
  }
  const add2 = (a, b) => {
    return a + b;
  }
  const double = x => x * 2;

let a = 5
let b = 6
let c = 'abc'
let d = 7
let e = 8
console.log(a+b+c+d+e)
console.log(a+c+b+d+e)
console.log(d+e+a+b+c)
console.log(a+d+c+b+e)

//spread operator 
let num = [1,2,3,4,5]
let num2 =[6,7,8,9]
const resultop = [num,...num2]
const resultop2 = [...num,...num2]
console.log(resultop)// [ [ 1, 2, 3, 4, 5 ], 6, 7, 8, 9 ]
console.log(resultop2)// [1, 2, 3, 4, 5,6, 7, 8, 9]

// what was the output
function foo (){
    let x3= 10;
}
//console.log(x3)//reference error 
//The output of the code would be ReferenceError: x is not defined.This error occurs because the variable x is declared within the scope of the function foo(). Therefore, it's only accessible within the function block. When you try to access x outside of the function foo(), it's not recognized, leading to a ReferenceError.

// what was the output
let df=44
function foo (){
    console.log('dd',df)
}
foo()// 44