//classes
class Rectangle{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    area(){
        return this.width*this.height;

    }
    paint(){
        console.log(`The painted color is ${this.color}`) 
    }
}
const rect=new Rectangle(2,3,"blue");
const area=rect.area();
console.log("Area without using method "+ rect.width*rect.height);
console.log(area);
rect.paint();