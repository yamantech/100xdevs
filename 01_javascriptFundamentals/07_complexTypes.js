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