// Is "else" required?
//
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         // ...
//         return confirm('Did parents allow you?');
//     }
// }
// 
// No, the function will exit on the first return.
//
// Rewrite the function using '?' or '||
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Did parents allow you?');
//     }
// }
// function checkAge(age) {
//     return (age > 18) ? true : confirm("Did your parents allow you?");
// }
// function checkAge(age) {
//     return (age > 18) || confirm("Did your parents allow you ?");
// }
//
// Function min(a,b)
//
// function min(a, b) {
//     return (a < b) ? a : b;
// }
// alert(min(2, 5));
// alert(min(3, -1));
// alert(min(1, 1));
//
// Function pow(x,n)
//
// function pow(x, n) {
//     let result = x;

//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// let x = prompt("What is x?");
// let n = prompt("What is n?");

// if (n < 1) {
//     alert(`Power of ${n} is not supported, please choose a positive integer`);
// } else {
//     alert(`The result of ${x} to the power of ${n} is ${pow(x, n)}`);
// }