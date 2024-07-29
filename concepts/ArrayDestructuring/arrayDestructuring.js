//Array Destructuring
const [a,b,c]=['jj','kk','uu']
console.log("aaray",a,c)//jj,uu
console.log("aaray",a,b)//jj,kk

//Object Destructuring
const {name: userName, age}={
    name : 'arjjun',
    age : 88
}
//console.log('obj',name)//error
console.log('obj',userName)
console.log('obj',age)