// 6. Conditional Operators ( if else elseif ,switch)
// a. if else else if
 /* syntax

if (condition1) {
 //  block of code to be executed if condition1 is true
} else if (condition2) {
 //  block of code to be executed if the condition1 is false and condition2 is true
} else {
 //  block of code to be executed if the condition1 is false and condition2 is false
}
 */
let a=3,b=3
if(a>b){
    console.log("A is greater than B");
}
else if(b>a){
    console.log("B is greater than A")
}
else{
    console.log("A and B  are equal")
}
// b. switch

/* syntax 

switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }
      */
let Case=3;
switch(Case){
    case 1:
        console.log("It's sunday")
    break;
    case 2:
        console.log("It's monday")
    break;
    case 3:
        console.log("It's tuesday")
    break;
    default:
        console.log("It's noting!!!")
}
    