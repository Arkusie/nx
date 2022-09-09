import { SHAPES } from './factory1/shapes.interface';
import { ShapeFactoryService } from './factory1/services/shape.factory.service';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-production-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-playground';
  circle = SHAPES.circle;
  rectangle = SHAPES.rectangle;
  square = SHAPES.square;

  constructor(private shapeFactory: ShapeFactoryService) {
    // const SquareShape = shapeFactory.getShape(SHAPES.square);
    // SquareShape.draw();
    // const RectangleShape = shapeFactory.getShape(SHAPES.rectangle);
    // RectangleShape.draw();
    // const CircleShape = shapeFactory.getShape(SHAPES.circle);
    // CircleShape.draw();
  }
  drawShape(shape: SHAPES) {
    this.shapeFactory.getShape(shape).draw();
  }
}
