## Types of data types

- number
- string
- boolean
- object (lists and dictionary )
- undefined

## Types of declaration
![alt text](https://i.imgur.com/QT1zwFi.png)

- var(reasignment, redeclaration)

## Scope

- Lifetime of variable
- Block Scope
- Let is block Scope
- var is a function scope
- undefined is a value and not defined is a error
- to create a function

## Type Casting/

```js
var x1 = 3;
var x2 = "5";
console.log(x1 + x2);
console.log(x1 - x2);
```

- in first case it will change 3 to string(implicit coercion)
- in second case 5 will change to number because it only known subtracting
- Explicit coercion

```js
var x1 = 3;
var x2 = "5";
console.log(x1 + parseInt(x2)); //in this explicit coercion is happening
console.log(x1 - x2);
```

- to convert object to string

```js
[2, 4, 5].toString();
```

- when we do this it shows NaN

```js
4 * "5a";
```

- == is slower than ===
- in == 2 steps are involved first coercion
- in === only 1 step is involved because it doesn't support coercion it directly checks the values then there data types

## Types of Function

1. Normal function
2. Arrow function
3. Anonoymous function
4. IIFE

## Copy by Value

- ... spread operator
  ```js
  var t1 = [400, 500];
  var t2 = [90, 80];
  var t3 = [...t2, ...t1];
  console.log(t3);
  ```

## Different types of Loops

- normal for loop more control like the basic using i and writing the i++
- in for loop readable in means index used to show index of array

```js
for (let idx in marks) {
  console.log("Index: ", idx, "Marks", marks[idx]);
}
```
