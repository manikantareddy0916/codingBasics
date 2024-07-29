const a =['a','b',"c","d","e","f"]
const b= [10,20,30,40]

//FOR EACH
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  //console.log(number);
});
//MAP
const res = a.map((ele)=>{
    console.log('map',ele)
    return ele
})
//FILTER
const res2 = a.filter((ele)=>{
    console.log('filter',ele != 'e')
    return ele !== 'e'
})
//FIND 
const res3 = a.find((ele)=>{
    console.log('find',ele == 'd')
    return ele == 'd'
})
//REDUCE
const res4 = b.reduce((pre,cur)=>{
    console.log("reduce",pre,'+',cur)
    return pre+cur //100
},0)
console.log('map',res)
console.log('filter',res2)
console.log('find',res3)
console.log('reducer',res4)
//console.log('reduce',res4)