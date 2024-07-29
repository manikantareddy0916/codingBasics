//In JavaScript, a callback function is a function that is passed as an argument to another function and is invoked after some kind of event or task has been completed. Callback functions are a fundamental concept in asynchronous programming and are commonly used in scenarios where we need to perform tasks asynchronously or handle events.
// Function that takes a callback as an argument

//that is passed as an argument to another function
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    // Call the callback function after greeting
    //and is invoked after some kind of event or task has been completed.
    callback();
  }
  
  // Callback function
  //a callback function is a function
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  // Call the greet function with a name and the sayGoodbye function as a callback
  //that is passed as an argument to another function
  greet("Aliced", sayGoodbye);
  