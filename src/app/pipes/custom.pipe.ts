import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricing'
})
export class CustomPipe implements PipeTransform {

  transform(value: number | null | undefined): string {
    if (value === null || value === undefined) {
      return '';
    }

    const formattedPrice = value.toFixed(2); 
    return `${formattedPrice} Dt`;
  }
}
