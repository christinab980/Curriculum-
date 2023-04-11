# NodeJS 104
## Modules make it easier to scale and maintain Node applications 

### Modules 
- compartmentalize code 
- act as building blocks in an application
- adhere to an import-export pattern 

### Types 
- core
- local 
- third party

### Import

```javascript
const someModule = requie('someModule;);
```

### Export 
```javascript
function greeting(name) {
  return `Hello ${name}`
}

module.exports = greeting

const greeting = require('./index.js')
greeting = ('John')
```