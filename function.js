function name(){
    console.log("Amol");
}
name();
// console.log(name());

function printsum(a,b){
    console.log("sum of given two numbers is : ",a+b)
}

printsum(1,"2"); //12
printsum("1",2); //12
printsum(1,2); //3

function returnsum(a,b){
    return a+b;

}
let sum=returnsum(12,3)
console.log("sum is : ",sum);

function loginUserMessage(username){
    if(username===undefined){  // OR if(!username)
        console.log("Please enter a username");
        return;
        
    }
   
    return `${username} just logged in`;
    
}   
console.log(loginUserMessage("Amol"))
console.log(loginUserMessage())

function calculateCartPrice(...num){ // rest operator colletcs all values in one array
    return num
}

console.log(calculateCartPrice(11,23,12,70,900,100))

const obj = {
    username:"AmolKendre",
    id:"123",
    salary:20000
}
function handleObject(anyobj){
    console.log(`username is : ${anyobj.username} id is : ${anyobj.id} salary is : ${anyobj.salary}`);
    
}
handleObject(obj);





