//callback

function calculator(a, b, fxn) {
    return fxn(a, b);
}

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
console.log(calculator(3, 4, add));
console.log(calculator(4, 2, subtract));
console.log(calculator(4, 5, multiplication));

console.log("-------");

// callback with anonymous function 
// function calculator(a, b, fxn) {
//     return fxn(a, b);
// }
let c = 8;
let d = 5;
console.log(calculator(c, d, (a, b) => {
    return a + b;
}
));
console.log(calculator(c, d, (a, b) => {
    return a - b;
}
));
console.log(calculator(c, d, (a, b) => {
    return a * b;
}
));
console.log(calculator(5, 1, (a, b) => {
    return a + b;
}
));



console.log("-------")
//closure concept
function mainframe() {
    let a = 23;
    let b = 34;
    function innerfunction() { //this function will take value of a and b without passing the parameter
        console.log(a);
        console.log(b);
    }
    innerfunction();
}
mainframe();


console.log("-------")
function calc(x, y, fxn) {
    return fxn();
}
let x = 8;
let y = 10;
console.log(calc(3, 5, () => {   //this function will console 18 by taking value as 8 & 10 instead of 3, 5 since fxn()- not accepting any argument
    return x + y;
}))

