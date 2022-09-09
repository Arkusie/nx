import { Shape } from './../shape.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CircleService implements Shape {
  draw(): void {
    console.log('CIRCLE');
  }
}
