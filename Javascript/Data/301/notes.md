# JavaScript 301 
## Unstanding imutability comes down to understanding how data is stored in memory 

**Definition of immutability**
Primtive data types are immutable. Immutability means that whenever a variable is declared, it lives at a unique address in memory and if it is late re-initialized (re-assigned), it will live at a new unique address. If a variable is initialized by reference, instead of by value, its unique address points to the reference address.

**List of primitive data types**
* strings
* booleans
* numbers 
* null 
* undefined 

**Example**

```
let age = 32; // initializes by value, it gets a unique address (e.g. Hx78)

let maryAge = age;  // initializes by reference, it gets a unique address (e.g. Rw33) but this address doesn't hold a value, it simply points to Hx78. 

let age = 33; // with reinitialization the new value is stored at a new address (e.g.Xa15) 
```

**Definition of mutability**
Collections of primitive data types are mutable, which means when they are moditifed or updated, the data is not stored at a new address by remains at the original address when the variable was first declared. 

**List of Collections**

* arrays
* objects 

Collections share the address for the data. 

Ask yourself, are these things sharing the same address? 
