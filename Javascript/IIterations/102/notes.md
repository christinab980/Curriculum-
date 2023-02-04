# Interations 102
## Declarativerly looping over arrays 

### Terms 

**declarative programming**
Hides the excution steps taken to achieve a result - the WHAT is more important than the HOW. 

**methods**
A function available to a specific data type (e.g. string) or a collection (e.g array).

### Methods 
In each of the methods below, we provide a callback function for at least on argument 

**`.forEach`**
Executes logic in each item of an array. The return value is `undefined`

```javascript 
const list =['apples','rice','soup']; 
list.forEach(function(item, index){
    console.log('Item $(index + 1) is $(item)');
});

```
**`.map`**
Returns a new arrays that manipulates each item of the array on which it is called in some way. 

```javascript 
const list = ['a','b', 'c'];
const newList = list.map(function(item, index) {
    return item.toUpperCase();
});

```

**`.filter`**
Returns a new array that is a subset of items of the array on which it is called. 

```javascript 
const list [1, 2, 3, 4];
const evens = list.filter(function(item, index) {
    return item %2 === 0;
});
```

**`.reduce`**
Returns a single combined value which aggregates that items of the array on which is it called in some way. 

```javascript 
const list = [1, 2, 3, 4];
const total = list.reduce(function(sum, item) {
    return sum + item 
}, 0);

```