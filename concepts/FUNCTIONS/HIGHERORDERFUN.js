//A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. In other words, it operates on functions, either by taking them as arguments, returning them, or both. Higher-order functions are a fundamental concept in functional programming and enable powerful abstraction and composition techniques.
function callback(da){
    return function(data2){
        return da +' '+ data2
    }
}
const data = callback('hello')//its for callback da
console.log(data('hello2')) // its for data2
