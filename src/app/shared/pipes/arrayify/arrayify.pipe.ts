import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayify',
  standalone: true
})
export class ArrayifyPipe implements PipeTransform {
  transform(value: any[] | null): any[] {
    return value || [];
  }
}

export default ArrayifyPipe;
