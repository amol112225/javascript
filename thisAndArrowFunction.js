const user ={
    username:"Amol",
    price:999,
    welcomeMessage:function(){
        console.log(`${user.username}, welcome to website`);
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();

// console.log(this);

// function fun(){
//     let name = "Amol"
//     console.log(this.name);// undefined (this.something will only work in object)
// }
// fun();

// const fun = function(){
//     let name = "Amol"
//     console.log(this.name);// undefined (this.something will only work in object)
// }

// fun();

//+++++++++++++++++++Arrow function++++++++++++++++++++++++++++++++++++++++++++++++++++++4

// const arrow = () => {
//     let name = "amol"
//     console.log(this);
// }
// arrow();

// const addTwo = (num1, num2) =>{
//     return num1+num2
// }

// same function can be written as\

// const addTwo = (num1, num2) => (num1+num2) // Implicit return 

// console.log(addTwo(3,2) )
const objectreturn =()=> ({name:"amol"})
console.log(objectreturn());
