

if(2=="2"){ // convert "2" into 2 and the ans is true
    console.log("Executed.");
    
}
if(2==="2"){ // it checks datatype of both elements so (here ans is false)
     console.log("Executed.");
}
else{
    console.log("NOT Executed.");
    
}

let month=4;
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("Apr");
        break;
    
    case 5:
        console.log("may");
        break;
        
    case 6:
        console.log("jun");
        break;
    case 7:
        console.log("jully");
        break;
    case 8:
        console.log("Aug");
        break;
    case 9:
        console.log("Sep");
        break;
    case 10:
        console.log("Oct");
        break;
    case 11 :
        console.log("Nov");
        break;
    case 12:
        console.log("Dec");
        break;
    
    default:
        console.log("Invalid Month");
        
        break;
}

const useremail = "a@amol.gmail.com"

if(useremail) console.log("Got user Email!!");
else console.log("Don't have user email!!");

// Falsy Values
// false , 0 ,'', -0 , BigInt 0n, "", null, undefined, NaN

// Truthy Values => Except falsy values
// true, 1, "0" , 'false' , " ", [], {}, function(){}

const arr=[]
if(arr.length==0){
    console.log("Array is Empty.");
    
}
const obj = {}
if((Object.keys(obj)).length==0){
    console.log("Object is Empty");
}
if(false == '') console.log("True");

// Nullish Coalescing Operator (??): null undefined

// let val;
// val = 5 ?? 10 //  5
// val = null ?? 19 // 19
// val = undefined ?? 10 // 10
// val = null ?? 10 ?? 45 // first valid val = 10
// console.log(val);

// Terniary Operator
//condition ? true : false

let val = 10
val>10 ? console.log("val is greater than 10") : console.log("val is NOT greater than 10")



