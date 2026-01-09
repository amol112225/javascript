//singleton
//const obj = new Object() // singleton object
//const obj = {} // simple object
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

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser[mysym]);


jsuser.email="kendre@gmail.com" // it will change email of object
// console.log(jsuser.email); //kendre@gmail.com
// console.log("Before using freeze : ",jsuser.name);
// if we want to not change object elements then use freeze
// Object.freeze(jsuser)
// Now it will not change any more
jsuser.name="Kendre"

// console.log("After usinig freeze : ",jsuser.name)
// console.log(jsuser)

// Function
jsuser.greeting = function(){
    console.log("Welcome js user")
}
// console.log(jsuser.greeting())
jsuser.greetingTwo = function(){
    console.log(`Welcome ${this.name}`)
}
// console.log(jsuser.greetingTwo())
//**************************************************************************** */
const  tinderuser = {}
tinderuser.id="124"
tinderuser.name="Sammy"
tinderuser.isloggedIn=false;
// console.log(tinderuser);

const regularUser ={
    mail:"some@gmail.com",
    fullname:{
        userfullname:{
            firstName:"Amol",
            lastName:"Kendre"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName) // Amol

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
// To combine these two objects
// Copy the values of all of the enumerable own properties\
//  from one or more source objects to a target object. 
// Returns the target object
const obj3 = Object.assign({},obj1,obj2) // {} is target and obj1 and obj2 are source
// console.log(obj3);
// +++++same can be done using spread ...
const obj4 = {...obj1,...obj2}
// console.log(obj4)

// to get all keys of object in one array
// console.log(Object.keys(tinderuser));
// to get all values of object in one array
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// to check is given property in object or not T/F
// console.log(Object.hasOwn('name'))

//********************de-structuring*************************** */

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
const {courseInstructor:instructor} = course
console.log(instructor);



