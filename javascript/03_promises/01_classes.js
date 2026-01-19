// //classes
// class Rectangle{
//     constructor(width,height,color){
//         this.width=width;
//         this.height=height;
//         this.color=color;
//     }
//     area(){
//         return this.width*this.height;

//     }
//     paint(){
//         console.log(`The painted color is ${this.color}`) 
//     }
// }
// const rect=new Rectangle(2,3,"blue");// instance of Rectangle class
// const area=rect.area();
// console.log("Area without using method "+ rect.width*rect.height);
// console.log(area);
// rect.paint();

// //Some more classes
// //Date
// const now = new Date(); // Current date and time
// console.log(now.getDate());

// //Maps
// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 30);
// console.log(map.get('name'));


class Rectangle{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    area(){
        return this.width*this.height;
    }
}

const rec=new Rectangle(2,3);
const recArea=rec.area();
console.log(recArea)