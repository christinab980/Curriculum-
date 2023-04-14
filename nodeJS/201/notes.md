# NodeJS 201
## Define npm scripts for greater efficieny 

### scripts live in package.json
```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},

```

### we can easily add new scripts
```json
"scripts": {
  "cowsay1": "node_mudules/.bin/cowsay JavaScript FTW!",
  "cowsay2": "npx cowsay JavaScript FTW",
  "dev": "node server.js",
  "start": "node server.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

### exxute scripts from the CLI 
- `npm run dev`
- `npm run start`
- etc.. 