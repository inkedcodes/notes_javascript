# JavaScript

**prints greeting in the browser** ⤵

```
let name = prompt("Please enter your name");
let greeting = `Hello ${name}!`;
document.write(greeting);
````

## function vs method 

funtion: 

method: 

function vs method

## loop
- what does loop allow us to do?
- do loops allow us to control how many times a set of instructions should be repeated?
- are there diff kinds of loops?
- does each loop has its own way of knowing when to stop?
- what is an iteration?
- is iteration a single execution of the loop body?



### `for` loop
- will `for` loop repeat a block of code?
- will it each time increament a counter until the counter no longer satisfies a given condition?
- does the counter with each increment, increase or decrease the counter?
- does this allow the loop to run from top to bottom or vice versa?
- what is the syntax for `for` loop?

> syntax

```
for (begin; condition; step) {
    // loop body
}
```
- can the syntax also be written as follows?
```
for (initialization; condition; incremeant) {
    // loop body
}
```

examples ⤵

> ★ count from 0 to (but not including) 3
```
for (let i = 0; i < 3; i++) {
    console.log(i);
}
```
| part | description |
| ----------- | ----------- |
| begin | let i = 0 |
| condition | i < 3 |
| body | console.log(i) |
| step | i++|

- how does the general loop algorithm work?

```
run begin 
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...
```

- does it mean that `begin` executes at once?
- and then it iterates?
- when are `body` and `step` executed?
- are they executed after each `condition` test?

*-*-*-*

- what is called an "inline" variable declaration?
- when the "counter" variable is declared inside the loop, is it called "inline" variable declation? (see examples)

```
for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // error, no such variable
```
- what is the solution for this?
- could you instead of defining a variable use an existing one?

```
let i = 0;
for (i = 0; i < 3; i++) {
    console.log(i);         // 0 1 2
}

console.log(i);             // 3
```
- why is the 3 visible?
- is it visible cause `i = 3` when the loop stopped?
- is that why when we `console.log(i)` outside of the loop it shows us `3`?



>★ countup from 0 to 10
```
for (let i = 0; i <=10; i++) {
    console.log(i);
}
```
>★ countdown from 10 to 0
```
for (i = 10; i >= 0; i--) {
    console.log(i);
}
```

- can we skip parts of the `for` loop?
- can we omit the `begin` part?


```
let i = 0;
for (; i < 3; i++) {
    console.log(i);
}
```

- can we also remove the `step` part?
- doing so, does it make it identical to `while` loop?
- meaning `while(i < 3)`?

```
let i = 0;
for (; i < 3; ) {
    console.log(i++);
}
```

- can we also remove everthing, creating an infinite loop?
```
let i = 0;
for (;;) {
    console.log(i);
}
```



### `for...of` loop

> syntax ⤵
```
for (variable of iterable) {
    // code block to be executed
}
```
> examples ⤵

```
const cats = ["lion", "tiger", "serval", "leopard", "jaguar"];

for (const cat of cats) {
    console.log(cat);
}
```

```
let data = [1, 2, 3, 4], sum = 0;

for (let element of data) {
    sum += element;
    console.log(sum);
}

console.log(sum);
```

```
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of number) {
    console.log(num);
}
```

```
const name = "Rick";
for (let char of name) {
    console.log(char);
}
```

### `for...in` loop

**examples** ⤵
```
let myBook = {
    Name: "Pride and Prejudice",
    Pages: "480",
    Format: "Hardback"
}

for (let property in myBook) {
    console.log(`${property} : ${myBook[property]}`);
}
```

```
const fruit = {
    name: "apple",
    color: "red",
    price: "0.99"
};

for (const property in fruit) {
    console.log(fruit[property]);
}
```

### `while`
examples ⤵

> ★ count from 0 to 2
```
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

// 0 1 2
```
- how many iterations does the above code have?
- does it have 3 iterations?
- what would happen if `i++` was missing from the above code?
- would the loop repeat forever(in theory)?
- what happens in practice?
- does the browser provide ways to stop such loops?
- can you kill the process in server-side javascript?

*-*-*-*

```
let i = 3;
while (i != 0) {
    console.log(i);
    i--;
}
```
- what is the shorter way to write `while(i != 0)`?
- is it to write `while(i)`?

```
let i = 3;
while (i) {
    console.log(i);
    i--;
}
```

- why is that?
- is it because when i becomes 0, the condition becomes falsy and the loop stops?
- are curly braces required when you have a single body loop? --- no
- how would write such loop 

```
let i = 3; 
while(i) console.log(i--);
```

*-*-*-*


> ★ countdown from 0 - 10. Instead of 0 it says "Blast off!". Instead of 10 it says "Countdown 10"

```
while (i >= 0) {
    if (i === 10) {
        console.log("Countdown 10");
    } else if (i === 0) {
        console.log("Blast off!");
    } else {
        console.log(i);
    }
    i--;
}
```



### `do...while`

- can the condition check be moved below the loop body?
- do you have to use `do...while` loop for that?
- what is the syntax for it?

> syntax
```
do {
    // loop body
} while (condition)
```
- how does `do...while` work?
- does it loop first execute the body?
- does it then check the conditon?
- if it is truthy does it execute it again and again?

```
let i = 0;
do {
    console.log(i);
    i++
} while(i < 3);
```

- when should you use `do...while`?
- should you use it when you want the loop body to execute at least once, regardless of the condition being truthy?
- what is the other preferred loop?
- is it `while` loop?

examples ⤵

> ★ countdown from 0 - 10. Instead of 0 it says "Blast off!". Instead of 10 it says "Countdown 10"

```
do {
    if (i === 10) {
        console.log("Countdown 10");
    } else if (i === 0) {
        console.log("Blast Off!");
    } else {
        console.log(i);
    }
    i--;
} while (i >= 0);
```

### breaking the loop

- when does a loop exit, normally?
- does it exit when its condition becomes falsy?

```
let sum = 0;
while (true) {
    let value = +prompt("enter a number", '');
    if (!value) break;
    sum += value;
    console.log(sum);
}

console.log("Sum: " + sum);
```
- what is the combination "infinite loop + `break`" useful for?
- is it useful for when a loops condition must be checked not at the beginning or end of the loop, but in the middle or even in several places of its body?

### continue 
- is `continue` a lighter version of `break`?
- does it stop the whole loop? --- no 
- does it instead stop the current iteration and forces the loop to start a new one?
- when would you use it?
- would you use it when we're done with the current iteration and would like to move on to the next one?

> ★ output only odd number
```
for (let i = 0; i < 10; i++) {
    
    if (i % 2 === 0) continue;
    console.log(i);
}
```

```
for (let i = 0; i < 10; i++) {

  if (i % 2) {
    console.log(i);
  }

}
```
- what is the diff between the above 2 egs of "output only odd number"?
- from a technical pov are both identical?
- does the 2nd eg create another lvl of nesting?

#### not related to continue 
- why does `i % 2` give you odd numbers?
- does it give you odd numbers because the value is `0` and it is falsy so the `console.log()` does not return any value and moves on to the next value 


> ★ output only even number
```
let i = 0;
for (; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

### break/continue on the right side of '?'
- what can not be used with the ternary operator '?'
- can it not be used with syntax constructs? 
- syntax constructs that are not expressions?
- are derivatives such as `break/continue` allowed? --- no

```
for (i = 0; i < 10; i++) {
    if (i > 5) {
        console.log(i);
    } else {
        continue;
    }
}
```

<mark>-can you write the above code as follows? --- no.<mark>
- what does this cause?
- does this cause a syntax error?

```
(i > 5) ? alert(i) : continue;
```

### labels 



## exercises 
```
const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];


for (const person of people) {
    if ((person === "Phil") || (person === "Lola")) {
        console.log(`Refuse: ${person}`);
    } else {
        console.log(`Admit: ${person}`);
    }
}

```