//callback function example 

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