import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return `${value.slice(0,150)}...`;
  }

}
