# NodeJS 105
## **package.json** manages third-party modules found at npm's repository  

### What is NPM?
- Command Line Utility (npm is budle with Node) 
- Online repository

### Research needed 
nodejs.org/en/knowledge/gettting-started/npm/what-is-npm 
npm.js.com/package/express 

### Open Source 
- free to use per a specific license 
- developers are not paid 
- not guaranteed to work at all times 
- try not to have a global install 
### Term 
- Dev dependencies - dependencies we use to develop the code but not when code is deployed 

### Synonyms 
- library 
- module 
- package

### npm commands 
`npm -v` (version)
`npm install -g <someModules>` (global install, not recommended)
`npm install <someModules>` (local install, recommended)
`npm init -y` (creates package.json with default values)

### package.json
- "dependencies" list producttion libraries
- "devDependencies" list the libraries used to write the code itself
- is created by `npm init-y`
- determines the contents of **node_modules/**

### node_module/
- contains all third-party modules installed ith `npm`
- each module has its own **package.json** so this direcotry can be quite large 
- do not modify the code in the directory

### Executing commands (if applicable)
using `cowsay` as an example
- node/modules/.bin/cowsay JavaScipt FTW! 
- npx cowsay JavaScript FTW!
npx 