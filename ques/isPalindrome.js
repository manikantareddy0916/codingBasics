function isPalindrome(data){
    let result =''

    //console.log('alksd',"9988".split('').reverse().join(''))
    const dataStr= (data.toString()).toUpperCase()
    //console.log('d',dataStr)
    for(let i of dataStr){
        //console.log('jj',i,"+",result)
        result = i + result
    }
    return result == dataStr
}
console.log(isPalindrome('ABCDEdcba'))
console.log(isPalindrome(1234321))
console.log('alksd',"9988".split('').reverse().join(''))
console.log('j', '123456'.split('').reverse().join(''))