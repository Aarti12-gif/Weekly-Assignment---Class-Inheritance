import Shape from './shape';

class Circle extends Shape {
  calculateArea() {
    super.calculateArea();
    console.log(this.constructor.name + ' Area Calclated Called');
  }
}
module.exports = Circle;
