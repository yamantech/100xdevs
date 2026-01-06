// 1. for loop

let users=["Ishwor","yaman","Raman"];
for(let i=0;i<users.length;i++){//initialization; condition;increment
    console.log(users[i])
}
// 2. while loop
let i=0;
while(i<users.length){
    console.log(users[i]);
    i++;
}
// 3. do while loop
i=0;
do {
    console.log(users[i]);
    i++; // increment
} while (i < users.length); // condition

//Assignment 
//to find a sum from 1 to a number
function sum(a){
    let sum=0;
    for(let i=1;i<=a;i++){
        sum+=i;
    }
    console.log(sum);
}
sum(2);
    //alternative way (chatgpt)
function sum(n){
    return (n * (n + 1)) / 2;

}
console.log(sum(4))