# API 201 
## Callback function were once a common way to handle asynchronous code 

### Snippets 

```javascript

var shoppingList = ['apples', 'biscuits', 'cabbage'];

function addItem(item) {
  setTimeout(() => {
    shoppingList.push(item);
    console.log("Item added to shopping list");
  }, 200);
}

function getAllItems() {
  setTimeout(() => {
    console.log('Shopping List Items:');
    console.log(shoppingList);
  }, 100);
}
//both are calling or firing a function. 
//addItem ('dip') - dip is an agrument 
addItem('dip'); 
getAllItems();

```
JavaScript is a single thread language - it only does one thing on a time. 

**What is an event loop?**
Event loop in JavaScript is a mechanism through which the 'calls waiting for execution' in the callback queue/job queue can be put on the call stack. For any event from the callback queue/job queue to come to call stack, the call stack will have to be empty. It builds from the bottom - depending on how simple the function is sometime the server fires the function before the next element stacked on the first. 

The time the function 'getAllItems' runs, is faster than the 'addItem' function meaning you get your list printed out before the 'addItem' function plays out. The function runs and is in memory but not in time. 

Callback function example: 

```javascript

var shoppingList = ['apples', 'biscuits', 'cabbage'];

function addItem(item, callback) {
  setTimeout(() => {
    shoppingList.push(item);
    console.log("Item added to shopping list");
    callback();
  }, 200);
}

function getAllItems() {
  setTimeout(() => {
    console.log('Shopping List Items:');
    console.log(shoppingList);
  }, 100);
}

addItem('dip', getAllItems);

```