
// 3. Operators
/*
Assignment Operator (=) assigns a value to a variable.

Arithmetic Operator (+,-,*) adds numeric values or concatenates strings.


Comparison Operator (>) compares two values and returns a boolean (true or false).
*/
 
// // 1. Artimatic operators

let a, b;
a = 2;
b = 5;

console.log(a + b);   // 7
console.log(a - b);   // -3
console.log(a * b);   // 10
console.log(a / b);   // 0.4
console.log(a % b);   // 2
console.log(a++);     // prints 2, then a becomes 3
console.log(++a);     // increments a to 4, prints 4 
console.log(a--);     // prints 4, then a becomes 3 
console.log(a);       // prints 3 
console.log(--a);     // decrements a to 2, prints 2
console.log(a ** a);  // 2 ** 2 = 4



// // 2. Assignment Operators (=,+=,-=)

a=3,b=4;
console.log(a+=a);// a=a+a;
console.log(a-=a);//a=a-a;


// // 3. Comparision Operators(==,===,>=,>,<=,<)

let c;
a=2,b=3,c="2";
console.log(a==b);//false 
console.log(a===c);//false ( also checks the datatype)
console.log(a<b);//true;



// 4. Logical Operators (&& || ! )
 
// with true and false

 a=true,b=false;
console.log(a&&b);
console.log(a||b);
console.log(!a);



//5.Ternary Operators
console.log((2>1)?'it is true':'its false');
// is 2 greater than 1  ? if true return true  else return false
console.log((17>-18)?'It is ture':'its false');




//1. arithematic operators
a=1, b=2;
console.log(a+b);
console.log(a*b);
console.log(a-b);
console.log(a%b);

//2.logical operators
if(2)
//ternary operators

//comparision operators
if(3>2){
    console.log("True...")
}
if(3<2){
    console.log("False...")
}
if(3<=3){
    console.log("Truee....")
}
if(2>=1){
    console.log("Truee....")
}
console.log(2=="2");
console.log(2==="2")


//assignment operators
a+=b;

//ternary opertors
console.log(((2>1))?"true":"false")


