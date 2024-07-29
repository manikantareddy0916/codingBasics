// //synchronous 
// console.log("Start");
// function doSomethingSync() { 
//     console.log("Operation 1"); 
//     console.log("Operation 2"); 
// }
// doSomethingSync();
// console.log("End")
// //All operations happen in a predictable, sequential manner, without any asynchronous delays or callbacks. Therefore, this code is synchronous.

// //asyn
// console.log("Start");
// function doSomethingAsync() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Operation 1");
//             resolve(); // Resolve the promise when the operation is done
//         }, 1000); // Simulating an asynchronous operation with a timeout
//     });
// }
// // async function runAsyncCode() {
// //     await doSomethingAsync(); // Wait for the asynchronous operation to complete
// //     console.log("Operation 2");
// // }

// // runAsyncCode().then(() => {
// //     console.log("End");
// // });

// doSomethingAsync()

// console.log('endok')

//async 2 ex

// console.log("Start");
// function s(callback) {
//     setTimeout(function () {
//     console.log("Async Operation");
//     callback();
//     }, 1000);
// }
// s(function () {
// console.log("Callback after Async Operation");
// });
// console.log("End");

//async ex3 
// console.log('now')
// function a(){
//     return ()=>{
//         setTimeout( () =>{
//             console.log('jj')
//         },1000)
        
//     }
// }
// a()()
// console.log('endd')

//async ex 4
// console.log('start')
// function a (){
//     return  new 
    
// }
// async function b(){
//     await a()
// }
// console.log('end')