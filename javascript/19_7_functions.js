//5 ways to make function

//1. named function taking from c++
// console.log(add(3,4));  //this is possible becuase function hoisting is supported
function add(a,b){
    return a+b;
}
console.log(add(2,4));


//2.anonymous function using the concept of refencing of c++
// x(); // this is not possible because it doesn't support variable function hoisting
var x=function(){
    let y=10;
    console.log(y)
}
x()     //expressional function

//3. annonymous arrow function:
// ()=>{
//     var ab=11;
//     console.log(ab);
// }

//expressional arrow function:
const abcd=()=>{
    var abc=12;
    console.log(abc)
}
abcd();






