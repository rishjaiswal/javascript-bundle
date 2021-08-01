console.log("Eighth Java Script Program of Execution");

// addEventListener() is encountered in a program, it registers a callback() 
// function in the environment of Web APIs and attaches an event to it.

console.log("start");

//  user clicks on the button, cb() goes into the callback queue and waits for its turn to get executed.
document.getElementById("btn").addEventListener("click",function cb() {
console.log("callback")}); 
console.log("end");


// Fetch() requests for an API call. Fetch() function returns a promise. So, we have to pass a callback 
// function which will be executed once this promise is resolved.
console.log("start");;
setTimeout(function cbT() {
console.log("cb setTimeout");},500);
fetch("https://api.netflix.com").then(function cbF() {console.log("cb NetFlix");})
console.log("end");