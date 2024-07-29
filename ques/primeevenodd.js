//prime numbers = 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97  Prime numbers are natural numbers that are divisible by only 1 and the number itself. In other words, prime numbers are positive integers greater than 1 with exactly two factors,             1 and the number itself.       Some of the prime numbers include 2, 3, 5, 7, 11, 13, etc. Always remember that 1 is neither prime nor composite.

//odd numbers  = 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99.           not divisible by 2

//even numbers = Even   are those numbers that are completely divisible by 2. For example, 2, 4, 6, 8, 10, and so on are even numbers. Composite numbers are those numbers that have factors more than 1 and the number itself. For example, 4, 6, 9, 15, and so on.           divisible by 2
let even = []
let odd =[]
let prime = [];
for(let i=0; i<=10; i++){
    if(i%2 === 0){
        even.push(i)
       //console.log(`${i}is a even number`)
    }
    else if(i%2 !== 0){
        odd.push(i)
        //console.log(`${i} is odd number`)
    }
}

for (let i = 2; i <= 10; i++) {
    let isPrime = true;
   // console.log('i',i)
    //console.log('w',isPrime,i)
    for (let j = 2; j < i; j++) {
        //console.log('j',j,'i',i)
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        prime.push(i);
    }
}
function primeCheck(a){
    let value = true
    let result
    //console.log(1%2)
        if(a== 1){
            value = false
        }else if(a == 2 ){
            value = true
        }else if(a%2 === 0){
            value = false
        }
    if(value){
        result=`${a} is a prime number`
    }else{
        result=`${a} is not a prime number`
    }
    return result
}
console.log('priemCheck',primeCheck(2))

// console.log('even',even)
// console.log('odd',odd)
// console.log('prime',prime)

//console.log('jj',0%2)//zero by anything zero