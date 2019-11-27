import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expeLengthPipe'
})
export class ExpeLengthPipePipe implements PipeTransform {

  transform(value: any, exponent?: number): any {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

}


@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrength implements PipeTransform {

  transform(value: any, exponent?: number): any {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

}
