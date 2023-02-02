# JavaScroipt Functions 101 
## A general overview 

### Terms 

**anonymous function**
A function that is not named (see also function expression). In this function expression, the function part is consider anonymous. 

```
const greeting = function() {
    return `Hello $(name)`;
}
```

**argument** 
A hardcore value passed into a function when it is executed. 
In the example below `'John'` in the between the parentheses is the agrument. 

```
greeting('John')
```

**call**
An action which executes (or fires) the function. 

**callback function**
Excutes within the function to which it is passed as an argument. 

```
const cb= function() {
    console.log('I am the callback.');
}

function greeting (name, fn) {
    fn();
    return `Hello$(name)`;
}

greeting ('Billy', cb)
```

**function**
There are two context. One is the function definition itself and the other is the code within the definition which executes when called and which somtimes returns a value. 

**function body**
Contains the code of the function itself within a set of curly braces. 

**function delaration** 
Uses the _function_keyword to declare a named function. The name of the function immediately follows the _function_ keyword. 

```
function greeting () {
    return 'Hello, you sure look nice today':
}
```

**function expression**
A function that is the initialization of a variable declaration. 
The variable, which is normal, stores the function but the function itself is considered anonymous or unnamed. 

```
const greeting = function() {
    return 'Hello, you sure look nice today':
}
```

**hoisting**
Allows a function declaration to be used in code before it is declared.

**IIFE**
An _immdiately invoked function expression_ is a function that is executed directly by the JS engine and not be other code.

```
(function () {
    return 'Hello';
})()
```
IIFEs can also have arguments and parameters. 

```
(function (name) {
    return `Hello, $(name),`;
})('Carlos')
```
**named function**
See function declaration. 

**parameter**
A placeholder whose value equals the argument passed into the function when it was called. The value is accessed only within the function itself.  In the example below 'name' in the function is the parameter. 

```
function greeting () {
    return `Hello $(name), you sure look nice today.`:
}
```

**parentheses**
The parentheses have two purposes. One is to execute a funtion. Another is part of the syntax to define a function. In the former, it may contain arguments. In the latter, it may contain parameters. 

**return**
If implemented, it excutes the last line of the a function's code. It proceeds a data type or a collection to be returned. We say that a function closes or exits when the code that follows _return_ executes which also means that any lines beneath it are ignored. 

**scope**
Refers to what values are available in memory at a given time during the excution of code. 