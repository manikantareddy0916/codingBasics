function fib(numb){
    let result=[0,1]
    for(let i =0 ; i<=numb; i++){
        let d = result[i] + result[i + 1]
        //console.log('j',result[i])
        //console.log('j',i,d)
        result.push(d)
    }
    return result
}
console.log('fibonaccis',fib(10))

//2
function generateFibonacci(limit) {
    let fibSeq = [1, 2]; // Start with the first two Fibonacci numbers
    let nextFib = 0;
    
    while ((nextFib = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]) <= limit) {
        fibSeq.push(nextFib);
    }
    
    return fibSeq;
}

const limit = 4000000;
const fibonacciSequence = generateFibonacci(limit);

console.log("Fibonacci sequence up to", limit, ":", fibonacciSequence);
