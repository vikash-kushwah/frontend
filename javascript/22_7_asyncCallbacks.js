//asynchronous Callbacks

const sum=(a,b)=>{
        console.log(a+b);
};
let a=15;
let b=20;
console.log("a");
console.log("b");
console.log("c");
setTimeout(()=>sum(a,b),5000);
console.log("d");
console.log("e");
