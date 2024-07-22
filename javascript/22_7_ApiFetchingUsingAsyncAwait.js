const fetchdata = async () => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data =await res.json();
        console.log(data);
    } catch{
        (console.log(`error is :${error}`));
    }
    
}
fetchdata();
console.log("a");
console.log("b");u
console.log("c");
console.log("d");