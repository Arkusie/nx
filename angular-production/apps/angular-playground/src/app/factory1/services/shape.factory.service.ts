import { SHAPES } from './../shapes.interface';
import { SquareService } from './square.service';
import { RectangleService } from './rectangle.service';
import { CircleService } from './circle.service';
import { AppInjector } from './../../app-injector';
import { Shape } from './../shape.interface';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShapeFactoryService {
  getShape(shapeType: string): Shape {
    // let shape: Shape = null;
    let shape: Shape = AppInjector.getInjector().get(CircleService);
    // if (shapeType === null) {
    //   return null;
    // }

    if (shapeType === SHAPES.circle) {
      shape = AppInjector.getInjector().get(CircleService);
    } else if (shapeType === SHAPES.rectangle) {
      shape = AppInjector.getInjector().get(RectangleService);
    } else if (shapeType === SHAPES.square) {
      shape = AppInjector.getInjector().get(SquareService);
    }
    return shape;
  }
}
