// Singleton

//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Anushka",
    age: 18,
    [mySym]: "myKey1",
    location: "jaipur",
    email: "Anu@123.com",
    
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = "Eric@123.com"
//Object.freeze(JsUser)

JsUser.email = "ujbk@123.com"
console.log(JsUser);

JsUser.greetig = function () {
    console.log("Hello");
}

JsUser.greetigTwo = function () {
    console.log("Hello, ${this.name");
}

console.log(JsUser.greetig);
console.log(JsUser.greetigTwo);
