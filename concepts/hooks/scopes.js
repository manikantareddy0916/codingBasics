//1
// var x = 10;

// function outer() {
//     var x = 20;
//     function inner() {
//         console.log('inner',x);
//     }
//     inner();
// }

// outer();
// console.log('outer',x)

//2
// var x = 10;

// function outer() {
//     var x = 20;
//     function inner() {
//         var x = 30;
//         console.log(x);
//     }
//     inner();
// }

// outer();
// console.log('outer',x)

//3
// var x = 10;

// function outer() {
//     function inner() {
//         console.log(x);//10
//     }
//     inner();
// }

// outer();
// console.log('outer',x)

//let 
//1
// let x = 10;

// function func() {
//     let x = 20;
//     console.log(x);
// }

// func();
// console.log(x);
//2
// let x = 10;

// function func() {
//     console.log(x);
// }

// func();
// console.log(x);

//const 
//1
const x = 10;

function func() {
    const x = 20;
    console.log('inner',x);
}

func();
console.log('outer',x);

//2
// const x = 10;

// function func() {
//     console.log('inner',x);
// }

// func();
// console.log('outer',x);