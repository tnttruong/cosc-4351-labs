// Your solution goes here 
function isStrongPassword(pass){
    if(pass.length <8){
        console.log("false- Too short");
        return false;
    }

    if(pass.includes("password") == true){
        console.log("false - Contains password");
        return false;
    }

    if(! /[A-Z]/.test(pass)){
        console.log("false - No uppercase characters");
        return false;
    }

    return true;
}
