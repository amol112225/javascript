const user ={
    username: "Amol",
    loginCount : 5,
    signedIn : true,

    getUserDetails: function(){
        console.log("Got user details form database");
        console.log(`username is : ${this.username}`);
        
        
    }
}
console.log(user.username);
console.log(user.getUserDetails());

function User(userName, loginCount, isLoggedIN){
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIN
    return this
}
const user1 = User("Amol", 45, true);
console.log(user1.loginCount);
const user2 = User("Shruti", 5, true);
console.log(user1); //it will show user2 user2 will overwrite on user1 solve this use new keyword


const user3 = new User("Amol", 45, true);
console.log(user1.loginCount);
const user4 = new User("Shruti", 5, true);
console.log(user3);

// constructor is reference about yourself
console.log(user4.constructor());
