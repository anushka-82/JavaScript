const user = {
    username: "Anu  ",
    price: 234,

    welcomeMessage: function() {
       // console.log(`${this.username}, welcome to website`);
    }
}

/* user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage() */

 /*function chai(){
    console.log(this);
}

chai() */

const chai = () => {
    let username = " Anu"
    console.log(this.username);
}

//chai()

/*const addTwo = (num1, num2) => {
    return num1 + num2   explicit return
}  curly braces mai wrap kiya toh return likhna padega

console.log(addTwo(3,4)); */

//const addTwo = (num1, num2) =>  num1 + num2  implicit return line 33 and 34
const addTwo = (num1, num2) =>  (num1 + num2) // brackets mai return ki zarurat nhi hai

console.log(addTwo(3,4));

