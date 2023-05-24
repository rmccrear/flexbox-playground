console.log("hello world");

// global variable
let isFriend = true;
let message;

if(isFriend === true) {
  message = "Hello, friend!"; // local variable
} else {
  message = "Who are you?";   // local variable;
}

// can we access this variable here?
alert(message);
