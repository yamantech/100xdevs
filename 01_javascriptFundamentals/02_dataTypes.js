// 2.Data types

// primitive datatypes
 // a. Integer
 let a=1;
 console.log(`a is ${typeof(a)}`);
 // b.String
  let b="Ishwor Acharya";
  console.log(`b is ${typeof(b)}`);
 // c.Boolean
    let c=true;
    console.log(`c is ${typeof(c)}`);
 // d.Undefined
    let d;
    console.log(`d is ${typeof(d)}`);
 // e.Null (In JavaScript, null represents "nothing", but its datatype is an object)
    let e=null;
    console.log(`e is ${typeof(e)}`)
 // f.Symbol (It means unique, even if the datatypes and the values are the same, if used symbol it differs from each other)
    let f,g;
    f="Ishwor";
    g=Symbol("Ishwor");
    console.log(f==g);//returns false
// g.BigInt(It means prints digit more than Integer >16 digit)
   let h=90071992547409911;
   console.log(h);
   console.log((BigInt(h)));

// Non primitive type (object,array,function)
 
 // a.Object
    let person

