# API 305 
## JavaScript's `.fetch` API is one way to execute common HTTP requests

**`GET`**
```javascript
async function getData() {
  const data = await fetch('https://sj-demo-contacts.herokuapp.com/contacts?auth=5x76') 
  .then(response => response.json())
  .catch(error => console.err(err))
}
console.log(data)
```
**`DELETE`**
```javascript

```
**`POST`**
```javascript

```
**`PUT`**
```javascript

```