import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'successMessagePipe'})
export class SuccessMessagePipe implements PipeTransform {
  transform(value: number): string {
    return null;
  }
}
