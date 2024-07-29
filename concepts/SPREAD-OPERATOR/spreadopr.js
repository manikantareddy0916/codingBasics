//SPREAD OPERATOR
//ARRAY
const a= [1,2,3,4,43]
const b = [5,6,7]
console.log('aa1',[a,b])//aa1 [ [ 1, 2, 3, 4, 43 ], [ 5, 6, 7 ] ]
console.log('aa2',[...a,b])//aa2 [ 1, 2, 3, 4, 43, [ 5, 6, 7 ] ]
console.log('aa3',[...a,...b])//aa3 [1, 2, 3, 4,43, 5, 6, 7]

//OBJECT 
const user = {
    name : 'abcde',
    age :23
}
const data = {
    id : '56789',
    //user//obj { id: '56789', user: { name: 'abcde', age: 23 } }
    ...user ////obj { id: '56789', name: 'abcde', age: 23 }
}
console.log('obj',data)