
const promise1 = new Promise((resolve, reject) =>{
    // Do an async task
    // DB calls,cryptography, network
    setTimeout(()=>{
        console.log("Async Task is complete");
        resolve();
    },1000)

})
promise1.then(()=>{
    console.log("Promise consumed");
    
})
// Another methode to do same thing 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)

}).then(function(){
    console.log("Async 2 resolved");
    
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"amol", email:"amolkendre18@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
    
})


const promise4 = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = false;
        if(! error){
            resolve({username:"amol",password:"123"})
        }
        else{
            reject('Error : Something Went wrong')
        }
    }, 1000);

})
promise4.then(function(user){
    console.log(user); 
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("The promise is either resolved or refected!");
    
})


const promise5 = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true;
        if(! error){
            resolve({username:"amol",password:"123"})
        }
        else{
            reject('Error : JavaScript Went wrong')
        }
    }, 1000);

})
async function consumePromise5(){
    try{
    const response = await promise5
    console.log(response);
    
    } catch(error){
        console.log(error);
        
    }
}
consumePromise5()


// where it used behind the scene
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(response);

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("error:", error);
    }
}

getAllUsers();

// using .then() and .catch()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))