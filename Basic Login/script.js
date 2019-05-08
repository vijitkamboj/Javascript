var database = [
    {
        username:"Vijit",
        password:"Vijit@123"
    },
    {
        username:"Nikhil",
        password:"Nikhil@123"
    }
];

var newsfeed = [
    {
        username:"Vijit",
        timeline:"Hey there just started huh"
    }
];

function checkUser(user,pass){
    for (var i=0 ; i<database.length ; i++){
        if (database[i].username===user) {
            if (database[i].password=== pass) {
                return true;   
            }
            
        }

    }
    return false;
}

function signIn() {
    var user = prompt("Enter your Username!!");
    var pass = prompt("Enter your Password!!");
    if (checkUser(user,pass) === true) {
        console.log(newsfeed);
        
    }
    else{
        console.log("Wrong Username or Password");
    }

    
};

signIn();