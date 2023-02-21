# API 102
## Promises allow users to keep using a site while data from somewhere else is gathered in the background

### Terms 
**`async/ await`**
The most recent way to implement a promise. It is farely easy to read and reason about. 

**callback function**
Before promises were a thing, we used callback functionsto handle asychronous code. Callback functions were a headache if we ever needed to call asnchronous logic sequentially. This was known as callback hell.

**promise**
A promise retruns a response but we cannot control or predict when this will happen. In dev speak, we say that a function returns a promise when the function has asynchonous logic that other code depends upon before it can be executed. 

**`Promise`**
A class made available by JS. We used an instance of this class to wrap asynchronous code. 