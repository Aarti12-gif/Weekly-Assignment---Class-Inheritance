import Shape from './shape.js';

class Circle extends Shape {
  calculateArea() {
    super.calculateArea();
    console.log(this.constructor.name + ' Area Calclated Called');
  }
}
module.exports = Circle;
