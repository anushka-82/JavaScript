const promiseOne  = new Promise(function(resolve, reject) 
{
    //Do an async task
    //DB calls, cryptography related, network call
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})
 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task two');
        resolve()
    },1000)
}).then(function(){
    console.log('Async to resolved');
})
const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Chai', email: 'chai@example'})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: " Anu", password:" 123"})
        }
        else{
            reject('ERRRO Something went wrong')
        }
    },2000)
})

 promiseFour
 .then(({user}) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(reolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: " Anu", password:" 13"})
        }
        else{
            reject('ERRRO JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
   try {
    const respone = await promiseFive
    console.log(respone);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const reponse = await fetch('https;//jsonplaceholder.typicode.com/users')
    const data = reponse.json()
    console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()
