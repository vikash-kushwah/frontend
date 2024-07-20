
//function constructor
function users(name,email,role){
    this.name=name;
    this.email=email;
    this.role=role;
}
var obj1=new users("vikash","vikash@gmail.com","admin")
var obj2=new users("mohit","mohit@gmail.com","admin")
console.log(obj1);
console.log(obj2);