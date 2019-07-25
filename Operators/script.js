let a = 1, b = 1;

let c = ++a; // c = 2
let d = b++; // d = 1

alert("c = " + c);
alert("d = " + d);

a = 2;
let x = 1 + (a *= 2);

alert("a = " + a); // a = 4
alert("x = " + x); // x = 5