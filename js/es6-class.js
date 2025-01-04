class Rectangle{
    constructor (height, width){
        this.height = height;
        this.width = width;
    }
    get area(){
        return this.calcArea();
    }
    calcArea(){
        return this.height * this.width;
    }
}
const rect = new Rectangle(10,5);
console.log(rect.area);