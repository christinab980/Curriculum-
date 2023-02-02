# Javascript Functions 102 
## An arrow function expression is more concise than the tradition functino expression. However, there are caveats (not discussed here). 

### Advantage (not complete list)

The `function` keyword is replaced with `=>`


```javascript 

const someFn = function () {
    return 'Hello World';
}

const someFn = () => {
    return 'Hello World''
}; 

```

The curly braces and the `return` keyword can be removed entirely if everything can fit on one line. 

```javascript 

const someFn = function () {
    return 'Hello World';
}

const someFn = () => 'Hello World';

```

You can remove parenthese if there is only one argument. 

```javascript 

//one agrument 

const greeting = function (name) {
    return 'Hello $(name)';
};

const greeting = name => "Hello $(name)";

//more than one argument 

const location = function(city, state) {
    return 'The location is $(city), $(state)';
};

const location = (city, state) => 'The location is $(city), $(state)';
 
```

A `return` that spans multiple line can either use an explicit `return`, with curly braces or an implicit `return`, with parentheses. 

```javascript

const studentDetails = function() {
    return {
        name: 'Christina',
        age: 16,
        grade: 91
    }
};

const studentDetails = () => (
    {
        name: 'Christina',
        age: 16,
        grade: 91
    }
)
```

