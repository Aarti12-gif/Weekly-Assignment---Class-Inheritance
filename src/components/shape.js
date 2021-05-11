class Shape {
    constructor(color){
      this.color = color;
    }
   calculateArea() {
     console.log(this.constructor.name + ' Area Calclated Called');
   }
   drawShape() {
     return '';
   }

 }
 module.exports.shape=Shape;
//  //export default Shape
 
 