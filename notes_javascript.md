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

syntax ⤵
```
for (variable of iterabel) {
    // code block to be executed
}
```

examples ⤵

★ countup from 0 to 10
```
for (let i = 0; i <=10; i++) {
    console.log(i);
}
```
★ countdown from 10 to 0
```
for (i = 10; i >= 0; i--) {
    console.log(i);
}
```
★ 
```
```


### `for...of` loop
examples ⤵

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

examples ⤵

★ countdown from 0 - 10. Instead of 0 it says "Blast off!". Instead of 10 it says "Countdown 10"

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