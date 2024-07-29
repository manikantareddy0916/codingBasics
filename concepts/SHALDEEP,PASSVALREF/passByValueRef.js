//PASS BY VALUE
let a = 10
let b = 20 
console.log("a",a)//10
console.log('b',b)//20
let c = a 
console.log('a',a)//10
console.log('c',c)//10
a = 120
console.log('a',a)//120
console.log('c',c)//10

//PASS BY REFERENCE
let aa = [10]
let bb = ['sting']
console.log("aa",aa)//[10]
console.log('bb',bb)//['string]
let cc = aa 
console.log('aa',aa)//[10]
console.log('cc',cc)//[10]
aa.push(30)
console.log('aa',aa)//[10,30]
console.log('cc',cc)//[10,30]
cc.push(80)
console.log('aa',aa)//[10,30,80]
console.log('cc',cc)//[10,30,80]