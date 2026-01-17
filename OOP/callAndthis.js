function SetUsername(username){
    // complex DB calls
    this.username  = username
    console.log("Called");
    
}
function createUser(username, email, pass){
    SetUsername.call(this,username)
    this.email = email
    this.pass = pass
}
const ak = new createUser("Amol", "akendre18@gmail.com","amol")
console.log(ak);
