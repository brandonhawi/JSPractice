// Rewrite the "switch" into an "if"
if (browser == 'Edge' ) {
    alert("You've got the Edge!");
} else if (browser == 'Chrome' || broswer == 'Firefox' || browser == 'Safari' || broswer == 'Opera') {
    alert("Okay we support these broswers too!");
} else {
    alert("We hope that this page looks ok!");
}

// Rewrite the "if" into "switch"
let a = +prompt('a?', '');
switch (a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert('2,3');
}