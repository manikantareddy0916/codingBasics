//properties
let a = [2,2,3,4]
console.log('length',a.length)//4

//Methods 
console.log('push',a.push(5,6,7),a)// 7   [1,2,3,4,5,6,7]
console.log('pop',a.pop(),a)       // 7   [1,2,3,4,5,6]
console.log('shift',a.shift(),a)   // now we shifting first ele so output is (2)   [2,3,4,5,6]
console.log('unShift',a.unshift(0),a)//now we unshifting last ele so (6)    [2,3,4,5,6]

console.log('join',a.join())//type is string '0,2,3,4,5,6'
console.log('join',a.join(''))// 023456
console.log('join',a.join(' '))//0 2 3 4 5 6
console.log('join',a.join(','))//0,2,3,4,5,6
console.log('join',a.join('/'))// 0/2/3/4/5/6

//a=[ 0, 2, 3, 4, 5, 6 ]
//     0  1  2  3 4  5 
console.log('slice',a.slice(2)) //   [3,4,5,6]
console.log('slice',a.slice(-2)) //   [5,6]
console.log('slice',a.slice(-4,-1)) //   [3,4,5]
console.log('slice',a.slice(2,4)) // [3,4]
console.log('slice',a.slice(0,2)) // [0,2]
console.log('slice',a.slice(2,0)) // []
//a = [ 0, 2, 3, 4, 5, 6 ]
//      0  1  2  3  4  5

console.log('a0',a)
console.log('splice',a.splice(3,2,'jj','kk')) // [2,3,4,5,6]
console.log('a1',a)
console.log('splice',a.splice(1,1,'jjjj','jj'),a) // [0,'jjjj', 'jj', 3, 'jj', 'kk', 6]
console.log('a2',a)
console.log('splice',a.splice(2,1)) //[ 'jj' ] [ 0, 'jjjj', 3, 'jj', 'kk', 6 ] 
console.log('a3',a)

//Math
console.log( Math.floor(Math.random() * 15)+60)//it for above 60 and below 75