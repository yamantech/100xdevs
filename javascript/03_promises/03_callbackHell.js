// Callback Hell = Situation in JavaScript where callbacks 
//                            are nested within other callbacks to the
//                            degree where the code is difficult to read.
//                            Old pattern to handle asynchronous functions.
//                            Use Promises + async/await to avoid Callback Hell


//trying to find what's callback hell

// here asyncronous code , i am trying to achieve tasks in order 1,2,3,4 but....it doesn't work
/*
function task1(){
    setTimeout(()=>console.log("Task 1 completed!"),2000)
}
function task2(){
    setTimeout(()=>console.log("Task 2 completed!"),1000)
}
function task3(){
    setTimeout(()=>console.log("Task 3 completed!"),3000)
}
function task4(){
    setTimeout(()=>console.log("Task 4 completed!"),1500)
}

task1();;
task2();
task3();
task4();
console.log("All tasks completed")

*/

/************************************************ */
//To solve that (use callbackhell);

/*

function task1(callback){
    setTimeout(()=>{
        console.log("Task 1 completed!");
        callback();
    },2000)
}
function task2(callback){
    setTimeout(()=>{
        console.log("Task 2 completed!");
        callback();
    },1000)
}
function task3(callback){
    setTimeout(()=>{
        console.log("Task 3 completed!");
        callback();
    },3000)
}
function task4(callback){
    setTimeout(()=>{
        console.log("Task 4 completed!");
        callback();
    },1500)
}

task1(()=>{
    task2(()=>{
       task3(()=>{
        task4(()=>{
            console.log("All task completed!")
        })
       }) 
    })
})

*/


/*************************************************************************** */
// Q: Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2


// my version answer
/*
function task1(callback){
    setTimeout(()=>{
        console.log("hi")
        callback();
    },1000)
}
function task2(callback){
    setTimeout(()=>{
        console.log("hello");
        callback();
    },3000)
}
function task3(callback){
    setTimeout(()=>{
        console.log("Hello there");
        callback();
    },5000)
}
task1(()=>{
    task2(()=>{
        task3(()=>{

        })
    })
})

*/

//  harkirat version
/*
setTimeout(()=>{
    console.log("hi");
    setTimeout(()=>{
        console.log("hello");
        setTimeout(()=>{
        console.log("hello there")
        },5000)
    },3000)
},1000)

*/


/******************************************************************* */

//using promise
/*
function setTimeoutPromisified(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    })
}

setTimeoutPromisified(1000).then(()=>{
    console.log('hi');
    setTimeoutPromisified(3000).then(()=>{
        console.log('hello');
        setTimeoutPromisified(5000).then(()=>{
            console.log("hello there");
        })
    })
})
*/
/************************************************************************************ */
//using promise chaining
/*
function setTimeoutPromisified(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    })
}
setTimeoutPromisified(1000)
  .then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hello there");
  });
 */