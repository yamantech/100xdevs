function greet(name){
    return "Hello,"+name
}
let ans1=greet("Ishwor");
console.log(ans1);

//Assignment #1
function sum(a,b){
    return a+b;
}
let sum1=sum(1,2);//3
console.log(sum1);
let sum2=sum("4","2");//42
console.log(sum2);

//Assignment #2
function canVote(age){
    if(age>17){
        return "Can vote"
    }
    return "Not eligible for vote"
}
let user1=canVote(17);
console.log(user1);
