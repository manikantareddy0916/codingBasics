let a = 'abcdef'
let result=''
// let k = 456789 number not iterable
for (let i of a){
    result = i + result 
    //console.log('j',i)
}
//1
//console.log(a.split('').reverse().join(''))
//2
//console.log(result, )
//3
function data(a){
    return a.split('').reverse().join('')
}
//console.log('data',data('12345'))

//as
let bd = [2,3,4,5,6,6]
let b = 'jjjjj'
//console.log('dd',b.length)

function maxNonZeroes(arr) {
    let maxCount = 0;
    let currentCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}

// Test the function
const binaryArray = [0, 1, 0, 1];
const maxNonZeroesCount = maxNonZeroes(binaryArray);
console.log("Maximum number of non-zeroes:", maxNonZeroesCount);

//3
let f=[1,3,4]
let g=[1,2,5]
let result2=f.concat(g).sort()
console.log('f',result2)
console.log('ff',[...f,...g].sort())//spread operator

//4 
let y=  [ 7,1, 3, 4, 6, 4]
const da=y.reduce((pre,cur)=>{
    console.log('pr',pre,cur)
    return pre+cur
    // if(pre - cur > ){

    // }
})