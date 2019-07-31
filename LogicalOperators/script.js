// What's the result of OR?
// 2
alert(null || 2 || undefined);

// What's the result of OR'ed alerts?
// This is equivalent to alert (undefined || 2 || undefined);
// Therefore, alert(1) is evaluated, its result is not truthy 
// so we continue to 2, which is evavluated and alerted but since 
// it is truthy, we stop there.
alert( alert(1) || 2 || alert(3) );

// What is the result of AND?
// This will alert null since it is the first falsy value
alert( 1 && null && 2 );

// What is the result of AND'ed alerts?
// This will alert 1, then stop since it returns a falsy value (undefined)
// and alert undefined 
alert( alert(1) && alert(2) );

// The result of OR AND OR
// && has a higher precedence so it will be evaluated first, 
// and it will return 3 because there are no falsy values.
// After that, it will alert 3 since it is the first truthy value.
alert( null || 2 && 3 || 4 );

// Check the range between
let age = prompt("What is the age?");
age >= 14 && age <= 90 && alert("Age is in the range!")

// Check the range outside
let age = prompt("What is the age?");
!(age >= 14 && age <= 90) && alert("Age is NOT in the range!");
(age < 14 || age > 90) && alert("Age is NOT in the range!");

// A question about "if"
// first and third will execute
if ( -1 || 0) alert ( 'first' );
if ( -1 && 0) alert ( 'second' );
if ( null || -1 && 1) alert ( 'third' );

// Check the login
let login = prompt("What is your login?");
if (login == "Admin") {
    let password = prompt("What is your password?");
    if (password == "TheMaster") {
        alert("Welcome!");
    } else if (password == null || password == '') {
        alert("Canceled!");
    } else {
        alert("Wrong password!");
    }
} else if (login == null || login == '') {
    alert("Canceled!");
} else {
    alert("I don't know you!");
}