function dup(a){
    let res =[]
    for(let i of a){
        console.log('j',i)
        if(res.includes(i)){
            
        }else{
            res.push(i)
        }
    }
    return res
}
console.log('res',dup(['a','a','b','c','d','d']))