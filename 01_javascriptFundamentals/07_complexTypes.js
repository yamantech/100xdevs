// 1. Objects
let user1 = {
	name: "Ishwor",
	age: 12
}

//Assignment #1
// Assignment #1
function greet(user){
    console.log(` ${user.name} age is ${user.age} `);
}
greet(user1)

// Assignment #2
let Users=[  
    {
    Name:"Ishwor Acharya",
    age:23,
    gender:"Male"
},
    {
    Name:" Bhumika Acharya",
    age:18,
    gender:"Female"
},
    {
    Name:"unknown",
    age:17,
    gender:"random"
},
  
]
function assignment2(user){
    if(user.gender == "Male"){
        console.log(`Hi Mr ${user.Name}`);
    }
    else if(user.gender=="Female"){
        console.log(`Hi Mrs ${user.Name}`)
    }
    else{
        console.log(`Hi ${user.Name}`)
    }}
assignment2(Users[0]);
assignment2(Users[1]);
assignment2(Users[2]);
// Assignment #3
function greet(user){
    console.log(` ${user.name} age is ${user.age} `);
    if(user.age>17){
        console.log("you are eligible for vote")
    }
    else{
        console.log("you are not eligible for vote")
    }
}
greet(user1)

//2. Array
const users2= ["Ishwor", "yaman", "Gaman"];
const tatalUsers = users2.length;
const firstUser = users2[0];

// #Assignmen =>Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
let arr1=[1,2,3,4,5];
const result=arr1.filter((arr)=>arr%2===0);
console.log("Assignment of Array, result="+result)

//3. Array of objects
const users = [{
		name: "Harkirat",
		age: 21
	}, {
		name: "raman",
		age: 22
	}
]
const fisrtUserName=users[0].name
const firstUserAge=users[0].age
console.log(fisrtUserName);
console.log(firstUserAge);

//4.Object of Objects
const userList={
    Name:"Ishwor",
    address:{
        country:"Nepal",
        district:"Udayapur"
    }
}
console.log(`User district ${userList.address.district}`)

