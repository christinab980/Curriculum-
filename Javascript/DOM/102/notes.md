# DOM 102
## Modifying the DOM comes down to learning a few methods and properties 

### Creating Elements 

```javascript 
const div = document.createElement('div');
div.innerText = 'Hello World!';
div.innerHTML = `<h1> Hello World </h1>`;
root.append(div);
```

### Selecting Elements 

```javascript
//returns a list of nodes 

document.getElementsByTagName('p'); 
document.getElementsByClassName('section-content');
document.querySelectorAll('article .section-content');

//return a single node
document.getElementById('root'); 
document.querySelector('article #root');

```

### Modifying Elements 

```javascript
const root = document.getElementById('root');
root.setAtrribute('data-id', 'someId');
root.style.color = 'crimson';
root.innerText = 'Some new text here';
root.removeAttribute ('data-id');

```