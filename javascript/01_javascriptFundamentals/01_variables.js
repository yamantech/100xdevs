//  //  1.Variables
// let name = "Ishwor";     // let can be reassingment but never can be redefined (blocked scoped)
// console.log(`Name :${name}`);
// const age = 23;        // const can't never redeclare and reassign (blocked scoped)
// console.log(`Age :${age}`);

// var isMarried = false;  // not in use, can be redeclear and reassign(function-scoped).
// console.log(`isMarried: ${isMarried}`);


//Example 1  Var (function scope)
/*
function test(){
    if(true){
        var Name="Ishwor";
    }
    console.log(Name);
}
test()
*/
//Example 2 let (block scoped ({ })),same for const
/*
function test(){
    if(true){
        let Name="Ishwor";
    }
    console.log(Name);// error:ReferenceError: Name is not defined
}
test();
*/
