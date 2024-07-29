let a=[12345,12345,13,1,8,123456,1234567]
//console.log(a.length)
const data = []
for(let i=0 ; i < a.length; i++){
    if(a[i].toString().length <= 5){
    //console.log('j',i,a[i])
    data.push(a[i])
    }
}
console.log('f',data)