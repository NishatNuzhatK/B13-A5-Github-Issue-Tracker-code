## 1️⃣ What is the difference between var, let, and const?
Ans:

The main difference between var, let and const is Var is function scoped and let, const is block scoped.

Var is function scoped which means it generally declares variable within a function and can be accessed outside of the function too. Also it has hoisting problem. 

Let and const are block scoped which means they can not be used outside the block in which they are declared. Let is used for variable for which values can be changed and const is used for variables for which values can not be changed. 


## 2️⃣ What is the spread operator (...)?
Ans:

Spread operator is used to turn a group of elements of array and objects into individual elements. Spread operator is usually used for copying and merging elements of array and object. 

```html
const array1 = [1,2,3,4,5];
const array2 = [...array1];

console.log(array2);
```


## 3️⃣ What is the difference between map(), filter(), and forEach()?
Ans:

Map() is used for copying elements of an array to a different array and map() returns a new array.

Filter() is used to filter out elements that meet a particular condition. It returns a new array with elements that meet the particular condition. 

ForEach() iterates through array and it does not return any value. 



## 4️⃣ What is an arrow function?
Ans:

Arrow function is the new version of declaring function that was introduced in ES6. It is used because it is easier to declare functions with it. An example of arrow function-

```html
const even = (a,b) =>{
    return a+b;
}

const evenNum = even(1,2);
console.log(evenNum)
```


## 5️⃣ What are template literals?

Ans:

Template literals are used to declare strings with backticks. It is used to declare multi line string and string interpolation. Example of template literals is,

```html
const fruit = 'apple';
const age = 12;

const result = `my age is ${age} and i like ${fruit}`;
console.log(result)
```
