// declare class

// export class using module.exports
import React from 'react';
import ReactDom from 'react-dom';
class Shape{
    constructor(height,width){
        this.height=height;
        this.width=width;
        this.color="red";
    }
    get area(){
      return this.calcArea();  
    }
    get draw(){
        return this.drawShape();
    }
    calcArea(){
        return this.height*this.width;
    }
    drawShape(){
        return circle;
    }
}