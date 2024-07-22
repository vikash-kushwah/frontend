const fetchdata = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data =await res.json();
    console.log(data);
}
fetchdata();
console.log("a");
console.log("b");
console.log("c");
console.log("d");