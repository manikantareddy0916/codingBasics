//call
//call(): This method invokes a function with a specified this value and arguments provided individually.
var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  var person1 = {
    firstName: "John",
    lastName: "Doe"
  };
  
  var person2 = {
    firstName: "Jane",
    lastName: "Doe"
  };
  
  // Using call to invoke the function with a specified 'this' value
  console.log(person.fullName.call(person1)); // Output: John Doe
  console.log(person.fullName.call(person2)); // Output: Jane Doe


//apply
//apply(): This method is similar to call(), but it accepts arguments as an array.
var numbers = [5, 2, 7, 1, 4];

var max = Math.max.apply(null, numbers);
console.log(max); // Output: 7


//bind
//bind(): This method creates a new function with a specified this value and optionally, pre-specified arguments.
var greet = function() {
    return "Hello, " + this.name;
  };
  
  var person = {
    name: "John"
  };
  
  var greetJohn = greet.bind(person);
  console.log(greetJohn()); // Output: Hello, John
  