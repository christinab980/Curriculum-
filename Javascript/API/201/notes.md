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

addItem('dip');
getAllItems();

```

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