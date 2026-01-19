//A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 

// Task 
// Make a promisified version of setTimeout and fs.readFile
    //setTimeout
/*
function setTimeoutPromisified(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));
}
function callback(){
    console.log("This is callback")
}
setTimeoutPromisified(2000).then(callback);

*/

    // Another example
/*
function waitFor3s(resolve){
    setTimeout(resolve,2000)
}
function setTimeoutPromisified(){
    return new Promise(waitFor3s);
}
function after3s(){
    console.log("After 3 sec");
}
setTimeoutPromisified().then(after3s);

*/

    //fs   It's console is error(just tried to make promisified version)
    /*
const fs=require("fs");
const read=fs.readFile("try.txt","utf-8").then((err,data)=>{
    console.log(data) 
});

*/

//Example of promise

/*
function random(resolve){//resolve is also function
     setTimeout(resolve,3000)
}
let p=new Promise(random);//suppose to return u something eventually

//using eventual value retured by the promise
function callback(){
    console.log("Promise fulfilled")
}
p.then(callback);


*/

//-----------------------------------------------------------------------------------------
//Task=> promisified version for fs.readFile,fs.WriteFile,cleanFile
/*

const fs=require("fs");
function FileRead(resolve){
    fs.readFile("try.txt",'utf-8',(err,data)=>{
        resolve(data);
    })
}
function callback(data){
    console.log(data);
}
let p=new Promise(FileRead);
p.then(callback);

*/



// understanding promise
// writing simple Promise class

/*   */
// class Promise1{
//     constructor(fun){
//        this.fun=fun;
//        this.fun(()=>{
//         this.resolve()
//        })
//     }
//     then(callback){
//         this.resolve=callback;
//     }
// }


// function readTheFile(resolve){
//     console.log("readTheFile called");
//     setTimeout(function(){
//         console.log("callback based setTimeout completed");
//         resolve();
//     },3000)
// }

// function setTimeoutPromisified(){
//     return new Promise1(readTheFile);
// }
// function callback(){
//     console.log("Callback function =resolve function")
// }
// const p=setTimeoutPromisified();
// p.then(callback)


