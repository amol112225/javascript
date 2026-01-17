let myName = "Amol     "
console.log(myName.length); // it give length with space


// get true length without space 
// using our own .trulength prototype 

const heros = ["thor","spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spiderman power is : ${this.spiderman}`);
        
    }
}

Object.prototype.amol = function(){
    console.log(`Amol is present in all object`);
    
}
heroPower.getSpiderPower()
heroPower.amol()
Array.prototype.heyamol = function(){
    console.log(`Hello`);
    
}

heros.amol()
heros.heyamol()
//heroPower.heyamol()

// final answerr of trulength

let name ="Amol             "
String.prototype.trulength = function(){
    console.log(this);
    
    console.log(`True length is : ${this.trim().length}`);
    
}
name.trulength();
