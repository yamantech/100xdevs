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

/*************************************************************************************** */
// understanding promise
// writing simple Promise class

/*  
class Promise1{
    constructor(fun){
       this.fun=fun;
       this.fun(()=>{
        this.resolve()
       })
    }
    then(callback){
        this.resolve=callback;
    }
}


function readTheFile(resolve){
    console.log("readTheFile called");
    setTimeout(function(){
        console.log("callback based setTimeout completed");
        resolve();
    },3000)
}

function setTimeoutPromisified(){
    return new Promise1(readTheFile);
}
function callback(){
    console.log("Callback function =resolve function")
}
const p=setTimeoutPromisified();
p.then(callback)

 */



//-----------------------------------------------------------------------------------------
//Task=> promisified version for fs.readFile,fs.WriteFile,cleanFile

//fs.readFile 
/*  (basic way)

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

/*  (best way)
const fs=require("fs");
function readFilePromisified(filename){
    return new Promise(resolve=>
        fs.readFile(filename,'utf-8',(err,data)=>{
            if(err){
                console.log(err)
        }
    else{
        console.log(data);
        resolve();
    }})
    )
}
function callback(){
    console.log("This is after promise fulfilled")
}
readFilePromisified('try.txt').then(callback)

*/

//fs.writeFile

/*  (my version )
const fs=require('fs');
// fs.writeFile('file',data,filetype,function)
function WriteFile(resolve){
    let text="Ishwor Acharya" 
    fs.writeFile('try.txt',text,'utf-8',(err,data)=>{
        resolve();
    })
}
let p=new Promise(WriteFile);
function callback(){
    console.log("File written succesfully!!!");
}
p.then(callback);

*/

// chatgpt version(best apporach to do)
/*
function writeFilePromisified(filename, text) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, text, 'utf-8', err => {
            if (err) reject(err);
            else resolve("done");
        });
    });
}

writeFilePromisified('try.txt', 'Ishwor Acharya')
    .then(console.log)
    .catch(console.error);

    

*/
// Appling chatgpt concept:
/* 
const fs = require("fs");
function writeFilePromisified(filename, text) {
    return new Promise(resolve => {
        console.log("This message is during promise");
        fs.writeFile(filename, text, 'utf-8', (err) => {
            if (err) {
                console.log(err);
            }
            else{
                console.log("File readed succesfully!!!")
                resolve();
            }
        })
    })
}
function callback() {
    console.log("This message is after promise is fullfield");
}

writeFilePromisified.then(callback);


*/