/* for loop

const cats = ["Leapord", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
    console.log(cat);
}

*/


/* for of

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of number) {
    console.log(num);
}

const name = "Rick";
for (let char of name) {
    console.log(char);
}

--DO NOT RUN THIS--
let i = 0;

for (;;) {
  alert( i++ );
}
--DO NOT RUN THIS--


-- displays even nos.
for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
    
}
*/




let myBook = {
    Name: "Pride and Prejudice",
    Pages: "480",
    Format: "Hardback"
}

for (let property in myBook) {
    console.log(`${property} : ${myBook[property]}`);
}

const cats = ["leopard", "serval", "jaguar", "tiger", "lion"];

for (const cat of cats) {
    console.log(cat);
}



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

let n = prompt("Enter a number");


for (let i = 2; i < n; i++) {
    let isPrime = true;
    let divisor = 2;
    while (divisor < i) {
        if (i % divisor === 0) {
            isPrime = false; 
            break;
        }
        divisor++;
    }
    if (isPrime) console.log(i);
}