//array methods  

//  methods => 
// push()=add new element at last 
// pop()=remove the last element
// unshift()=add new elemet at the first index
// shift()=remove the first element
//includes()=>check if that element is persent or not(return true or false)
//indexOf()=>check the index of the the element if present => element not fount returns false

let array = [1, 2, 3, 4, 5]

array.push(6);// adding new value of after last index
array.pop();// remove the last value of array
array.unshift(2);//add new value at first index
array.shift();//remove the first element from the array
console.log(array.includes(1));// check whether the element is included in the array  => element not fount returns false
console.log(array.indexOf(2));// Returns the index of the the element if present => element not fount returns false




/******************************************************************************** */
// methods=>
//slice(start,end)=returns a new array from start to end-1, does NOT modify original.
//splice(start, deleteCount, ...items)=modifies original array: removes deleteCount elements from start and optionally adds items.

array=new Array(1,2,3,4,5);
console.log("original array",array);
let slice=array.slice(3,5);
console.log(" slice ",slice);
slice=array.slice(-3);
console.log(" slice ",slice);
let splice=array.splice(3); 
console.log("splice ",splice);
console.log("final original array ",array);


/****************************************************************************** */
//methods=>

//sort= sort Aa-Zz
// reverse = sort Zz-Aa
// join=Converts array to string,optionally can include seperator between them
//concat=combine array with other array or string but doesn't modify origial array



array=["Ishowr","Kishwor","Amm"];
console.log(array.sort());
console.log(array.reverse());
 console.log(array.join(''));
 console.log(array.concat("ishwor"));


