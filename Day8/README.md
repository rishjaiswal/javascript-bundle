## JavaScript Day-8

- Event loop is to continuously monitor the callstack and the callback queue. If the callstack is empty and the event loop sees a function present in the callback queue waiting to be executed, it transfers it to the callstack

- Web APIs are parts of browsers not JS Engine. Browser gives access to all these functionalities inside JS Engine through Window which is a global object.
- SetTimeout() , DOM API, Fetch() , Local storage , Console &  Location
- To access all these functionalities inside the JS code, write in window. format but it’s not mandatory. Format -> For Example, window.setTimeout() , etc

- Call back function, after the event completion, gets into the callback queue. Event loop checks the call back queue and puts the call back function into the call stack.
- Whenever any program is executed in JS, GEC is formed and it is pushed into the call stack.
- Event loop is to continuously monitor the callstack and the callback queue. If the callstack is empty and the event loop sees a function present in the callback queue waiting to be executed, it transfers it to the callstack , then the cb() is quickly executed. After it to put in the console, it is popped out of the callstack.
- Callback Queue => Task Queue


- Fetch() requests for an API call. Fetch() function returns a promise. So, we have to pass a callback function which will be executed once this promise is resolved.
- Event loop keeps checking the status of callstack, when the call stack becomes empty, it pushes these callback functions to callstack and then they are executed.
- All the cb-functions which go through promises as well as mutation observer, all of them occupy the microtask Queue. The event loop gives chance to the cbfunctions from callback queue to get shifted to the call stack only when all cbfunctions in Microtask queue have been executed.


- Starvation : It is the condition in which a cbfunction in microtask queue produces another microtask during its execution as a result of which the cbfunctions in callback queue(being lower in the priority than microtask queue) might not get a chance to get executed.


