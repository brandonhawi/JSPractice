// Last loop value
// 1 is the last value alerted
let i = 3;

while (i) {
    alert(i--);
}

// Which values does the while loop show?
// 1. (1, 2, 3, 4)
let i = 0;
while (++i < 5) alert( i );
// 2. (1, 2, 3, 4, 5)
i = 0;
while (i++ < 5) alert( i );

// Output even numbers in the loop
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 1) continue;
    alert(i);
}

// Replace "for" with "while"
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++
}

// Repeat until the input is correct
let i = 0;
while (i < 100) {
    i = prompt("Please input a number greater than 100");
    if (i == '' | i == null) {
        break;
    }
}