# battle

## A customizable chess like browser game<br><br>

### "Coding Standard"

Do:  
```
if ( isThingTrue ) {
    console.log("its true");
}
```

Dont:  
```
if ( isThingTrue ) console.log("its true");
```

---<br><br>

Try to avoid ternary operators...
```
 foo = isThingTrue ? "yes" : "no" 
```

--- <br><br>


Try to avoid lambda syntax... 
```
 foo = () => {}  
```
   
unless doing a simple thing like this... 
```
 array.filter( character  => character.dead === true  )
```
---<br><br>

Do
```
if ( variable === undefined )

if ( isFoo === true)
```
   
Dont
```
if ( variable )

if ( isFoo ) 
```
---<br><br>

Default to **const**

---<br><br>

NEVER use **null** unless doing operations on data from the Database. Always use **undefined** because Javascript uses this syntax for its bottom value

---<br><br>

Always use **===**


