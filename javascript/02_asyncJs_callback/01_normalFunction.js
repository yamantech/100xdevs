
//simple functions
//Example 01
/*
function sum(a,b){
    return a+b;
}
const sum1=sum(2,3);
console.log("Sum is : " +sum1);
*/
/*
//Example 02
function sum(n){
    return (n*(n+1))/2;
}
const sumOfN=sum(3);
console.log("Sum is : " +sumOfN);
*/

 //another way (using for loop)
  /* 
function sumUsingLoop(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
       
    }
     console.log("Sum using for loop: " +sum);
}
sumUsingLoop(3);

*/
// //Synchronous code
/*
function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);

*/

//I/O heavy operations

/*
Examples of I/O Heavy Operations:
Reading a file
Starting a clock
HTTP Requests

*/

//1. Synchronously (One by one)

const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);

const contents3 = fs.readFileSync("b.txt", "utf-8");
console.log(contents3);



//2. Asynchronous code, callbacks

function read(err,data){
    console.log(data);
}
fs.readFile("a.txt", "utf-8",read); 
fs.readFile("b.txt", "utf-8",read); 
console.log("Done!!!")

// How JS executes asynchronous code
// jargon 
/*
 call stack 
 web APIs
 callback Queue
 event loop

 */

 
 function timeout(){
    console.log("Click the button");
 }
 console.log("Hi");

 setTimeout(timeout,1000);

 console.log("Welcome to loupe.");
 let c=0;
 for(let i=0;i<1000000;i++){
    c=c+1;

 }
 console.log("Expensive operation done.");

/*

option 1:   \
        Hi 
        welcome to loupe.
        Expensive operation done
        Click the button

option 2:
        Hi
        Welcome to loupe.
        click the button
        Expensive oeration done.

    */