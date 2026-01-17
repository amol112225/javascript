function mulBy5(num){
    return num*5;
}
mulBy5.power = 2;
console.log(mulBy5(2));
console.log(mulBy5.power);
console.log(mulBy5.prototype);

// in javascript everythin is object
/*
function \\-->
array   -->          Object  -->        null
string  -->
*/

function CreateUser(username, score){
    this.username = username
    this.score = score
}

CreateUser.prototype.increment = function(){
    this.score++;
}
CreateUser.prototype.printMe = function(){
    console.log(this.username);
}
const chai = new CreateUser("chai",34)
const tea = new CreateUser("tea",78)
chai.increment()
chai.printMe()


/*
a new object is created: the new keyword initiates the creation of a new javascript object.

A prototype is linked : the newly created object gets linked to the prototype property of the constructor function.
this means that it hasaccess to properties and methods defined onthe constructors prototype.

The constructor is called : The constructor function is called 
with the specified arguments and this is bound to the newly created object.
 if not explicit return value is specified from the constructor, javascript assumes this
the newly created object, to be the initended return value.

The new object is returned : After the constructor function
has been called, if it dosent return a non-primitive value 
(object, array, function, etc) the newly created object is 
returned

*/
