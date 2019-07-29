/* // if (a string with zero)
// Will be shown 
if ("0") {
    alert( 'Hello' );
}

// The name of JavaScript
let answer = prompt('What is the "official" name of JavaScript?');
if (answer == "ECMAScript") {
    alert("Right!")
} else {
    alert("Didn't know? ECMAScript!")
}

// Show the sign
let number = prompt("What is the number?");
if (number > 0) {
    alert('1');
} else if (number < 0) {
    alert('-1');
} else {
    alert('0');
}

//Rewrite 'if' into '?'
let a = -15;
let b = 6;
let result = (a + b < 4) ? 'Below' : 'Over';
alert(result); */

//Rewrite 'if..else' into '?'
let login = prompt('What is your login?');
let message = (login == 'Employee') ? 
    'Hello' : (login == 'Director') ?
    'Greetings' : (login == '') ?
    'No login' : '';
alert(message);