function myName(params) {
    console.log("A");
    console.log("N");
    console.log("U");
}

//myName()

/*function addTwoNum(num1, num2) {
    console.log(num1 + num2);
} */

function addTwoNum(num1, num2) {
    //let result = num1 + num2
   // return result // result ke baad kuch bhi print nhi hoga
    return num1 + num2
}


const result = addTwoNum(3, 4)

//console.log("Result: ", result);

function loginUserMessage(username) {
    if (username === undefined) {
        //console.log("Please enter username");
        returnN
    }
    return '${username} just logged in  '
}

//console.log(loginUserMessage("Anu"));


function calculateCartprice(...num1 ) {
    return num1
} // ...num is a rest operator

console.log(calculateCartprice(200, 400, 600));

function calculateCartprice(val1, val2, ...num1 ) {
    return num1
} // ...num is a rest operator

console.log(calculateCartprice(200, 400, 600, 7000, 4000)); // 200 and 400 val1 and val2 le gaya

const user = {
    username: "anu",
    price: 231
}

function handleObjesct(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}` );
}

//handleObjesct(user)

handleObjesct({
    username: "sam",
    price: 299
})
const newArray = [200, 400, 500, 300]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(newArray));