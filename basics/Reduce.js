const myNums = [1, 2, 3]

// const total = myNums.reduce(function (acc, currVal){
   
//    console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)

const total = myNums.reduce( (acc, currVal) => acc + currVal, 0)


console.log(total);


