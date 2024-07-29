//mock 1
let n1= 10
function a(){
  n1='dct'
  return n1
}
console.log('n1',n1)// 10
console.log('a',a())// dct
console.log('n11',n1)// dct

//mock 1
console.log('nan',typeof(NaN))//number
console.log('array',typeof([]))//obj
console.log('obj',typeof({}))//obj
console.log('number',typeof(0))//num
console.log('number',typeof(-1))//num
console.log('number',typeof(6))//num
console.log('undefined',typeof(undefined))//undefined
console.log('null',typeof(null))//object

//mock 3
//ADD
console.log('ADD')//string + int = string
console.log(2+'7',typeof(2+'7'))
console.log(2+'d',typeof(7+'d'))
console.log('d'+2,typeof('d'+2))
console.log('3'+7,typeof('3'+7))
//SUB
console.log('SUB')//string - int = int
console.log(2-'4',typeof(2-'7'))
console.log(2-'d',typeof(7-'d'))
console.log('d'-2,typeof('d'-2))
console.log('37'-7,typeof('3'-7))
//MULTI
console.log('MULTI')// string * int = int
console.log(7*'8',typeof(7*'8'))
console.log('7'*8,typeof('7'*8))
console.log(8*'f',typeof(8*'f'))
console.log('f'*4,typeof('f'*4))

// TRUTHY OR FALLSY
let obj={
  
}
if(obj){
  console.log('truthy')
}else{
  console.log('falsy')
}
