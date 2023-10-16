// const tinderUser = new Object()  ;> Singleton object

const tinderUser = {}// non singleton object

tinderUser.id = "123"
tinderUser.name = "abs"

const regularUser = {
    email: "abn@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hit",
            lastname: "abv"
        }
    }
}

//console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: "123", 
        email: "asd@JSON.com"
    },

    {
        id: 123, 
        email: "asd@JSON.com"
    },
]

//user[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedin'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "abc"
}

const {courseInstructor} = course
//console.log(courseInstructor);

/*{
    "coursename": "js in hindi",
    "price": "99",
    "courseInstructor": "abc"
}*/

