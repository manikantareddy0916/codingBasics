//pass by value 
function passbyValue(a){
    console.log('before a',a)
    a = 20
    console.log('after a',a)
}
let value =10 
passbyValue(value)
console.log(value)

//pass by Reference
function passbyRef(obj){
    console.log('before',obj)
    obj.data = 'new Value'
    console.log('after',obj)
}

let value2 = {
    data:'old VAlue'
}
passbyRef(value2)
console.log('outside',value2)
console.log(NaN == NaN)