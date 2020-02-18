import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clipipe'
})
export class ClipipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
