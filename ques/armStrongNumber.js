
function armStrongNumber(a){
    let data=0
    const b = a.toString()
    console.log('b',b)
    for( let i of b){
        // console.log('j',parseInt(i))
        // console.log('jd',b.length)
        data += Math.pow(parseInt(i), b.length)
    }
    return data == a
}
console.log(armStrongNumber(9474))