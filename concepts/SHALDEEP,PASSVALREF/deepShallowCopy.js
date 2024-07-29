//SHALLOW COPY
//nonPrimitues -- array,object 
//if u change the value it will change


//arr1 and arr2 have same memory location 

let arr1 = [1,2,3,4,5]

let arr2 = arr1
arr2[0] = 65

console.log('compare',arr1 == arr2)
console.log('change',arr1)//[ 65, 2, 3, 4, 5 ]

//OBJECT
//obj1 and obj 2 have same memory locaton

let obj1 = {
    name:'abcd',
    data: {
        result : '6767'
    }
}
let obj2 = obj1
obj2.name = 'arjun'

let obj3 = Object.assign({},obj1)
obj3.name = 'ram' //if we change the name it will effected to the obj3 not in obj1

console.log('objcomper',obj1 == obj2)// true    bcz same memory location
console.log('dataChange',obj1) //{ name: 'arjun', data: { result: '6767' } }
console.log('obj2',obj2) //{ name: 'arjun', data: { result: '6767' } }
console.log('LocationChange',obj3) //{ name: 'arjun', data: { result: '6767' } }
console.log('compera obj1 == obj3',obj1 == obj3) // false    bcz diffrent memory location
console.log('compera',obj3.name == obj1.name) //true   bcz it have same memory location
console.log('compera',obj3.name == obj1.name) //true   bcz it have same memory location
console.log('compera',obj3.data.result == obj1.data.result) //true bcz it have same memory location