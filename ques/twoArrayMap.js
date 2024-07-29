// const array1 = ['b', 'c', 'd'];
// const array2 = ['a', 'b', 'c', 'd'];

// const data = array1.filter((element, index) => {
//     (element == array2.filter((ele,i)=>{
//         // if(element == ele){
//         //     console.log('abc',ele)
//             return ele
//         // }
//     }))
// });
// console.log('jj',data)
const array1 = ['b', 'cf', 'd'];
const array2 = ['a', 'b', 'c', 'd'];

const data = array1.filter((element) => {
    return array2.includes(element);
});

console.log('jj', data);
