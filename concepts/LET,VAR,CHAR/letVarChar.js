
//LET
let n1= 10
function a(){
  n1='dct'
  return n1
}
//it will show error if we reDeclear n1
//let n1 = 8 
console.log('n1',n1)// 10
console.log('a',a())// dct
console.log('n11',n1)// dct

//CONST
// const n2= 10
// function b(){
//   n2='dct2'
//   return n2
// }
// console.log('n2',n2)
// console.log('a',b())
// console.log('n22',n2)
//error bcz of const 

//VAR
var n3= 10
function c(){
  n3='dct'
  return n3
}
// HEAR WE REDECLEARED VAR with n3 it doesnt show error
var n3=4
console.log('n3',n3)// 10 after decleration of n3 again
console.log('c',c())// dct
console.log('n3',n3)// dct