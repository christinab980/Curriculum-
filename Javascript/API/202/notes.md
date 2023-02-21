# API 202
## Using an instance of `Promise` improves how we handle asynchronous code

A promise either resolves or rejects. Each is a valid response what we handle inside of `.then` and `.catch`, respectively. 

### Terms 

**`.catch`**
A method chained to the response that the promise return with `reject` and within which we pass a callback function to hand the error. 


**`reject`**
This is a callback function provided that we call when the execution of asynchronous code was unsuccessful. 

**`resolve`**
This is a callback function provided that we call when the execution of asynchronous code was successful. 

**`.then`**
A method chained to the response that the promise return with `resolve` and within which we pass a callback function to hand the data. 

