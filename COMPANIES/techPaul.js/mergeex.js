let a=[14,2,3,123,]
console.log(a)
console.log('a',a.sort(),a)
// a.sort((x, y) => x - y);
a.sort((x,y)=>{
    console.log('x',x,'y',y)
    x-y
    console.log('j',x-y)
})
console.log('b',a)