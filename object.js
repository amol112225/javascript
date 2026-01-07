//singleton

// Object literals
const mysym = Symbol("Key1") // symbol

const jsuser = {
    name:"Amol",
    email:"amolkendre18@gmail.com",
    age:19,
    [mysym]:"Mykey1", // symbol
    location:"Pune",
    isloggedIn:false,
    lastloginDays:["mon","tue","wed"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser[mysym]);


jsuser.email="kendre@gmail.com" // it will change email of object
console.log(jsuser.email); //kendre@gmail.com
console.log("Before using freeze : ",jsuser.name);
// if we want to not change object elements then use freeze
Object.freeze(jsuser)
// Now it will not change any more
jsuser.name="Kendre"

console.log("After usinig freeze : ",jsuser.name)