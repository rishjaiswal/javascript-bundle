## JavaScript Day-7

- Functions are passed as arguments to another function. These are called the first-hand functions.
- The function which is passed into another function is called a call back function.
- It gives access to whole asynchronous world from a synchronous threaded language
- Any operation blocking the call stack is known as blocking the main thread.

- Event Listner Example : 

    Document.getElementById(“Click Me”).
    addEventListener(“Click” , 
    function xyz() {
    console.log(“Button clicked”);
     })

- When the event occurs, it will call the callback function (which is stored somewhere else may be CallbackQueue) and the callback function appears in the call stack.
- EventListeners are heavy. They take memory and form closure with the functions even when the call stack is empty
- On removing the EventListeners, all the values/functions held by it will be garbage collected.

