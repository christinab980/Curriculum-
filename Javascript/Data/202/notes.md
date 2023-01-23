# JavaScript Data 202 
## The syntax to read data depends on the data types or the data collections in which data types are found

### arrays 
We use an index to read data from an array by enclosing the index value within square brackets. 

```
const shoppingList = ['apples', 'celery', 'bread'];
console.log(shoppingList[0]) // --> applies

```

JavaScript considers arrays to be objects. So the shopping list above looks like this to JavaScript. 

```
const shoppingList = {
    0: 'apples' 
    1: 'celery'
    2: 'bread'
}

```
## objects 

We use bracket notation or dot notation to read data. 

``` 
const car = {
    color: 'green'
    mileage: '34521'
    isNew: false
};

console.log(car['mileage']) // --> 34521
console.log(car.mileage) // --> 34521

```
you can change value in a dot notation like (car.color ='gold'; )

## string, booleans and numbers 

Refer to the variable name to read the data. 

```
const name = 'paul';
console.log(name); // --> Paul 
```