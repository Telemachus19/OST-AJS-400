import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateWords',
  standalone: true,
})
export class TruncateWordsPipe implements PipeTransform {
  transform(value: string, wordLimit: number = 3): string {
    if (!value) return '';
    const words = value.split(/\s+/);
    if (words.length <= wordLimit) return value;

    return words.slice(0, wordLimit).join(' ') + '...';
  }
}
