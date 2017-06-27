import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo',
})
export class DemoPipe implements PipeTransform {
  transform(value: string, ...args) {
  // transform(value: string, args?) {
    return value.toUpperCase();
  }
}
