import { Pipe, PipeTransform } from '@angular/core';
import { NewsDetailDto } from '../models/newsDetailDto';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: NewsDetailDto[], filterText: string): NewsDetailDto[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';

    return filterText
      ? value.filter(
          (n) => n.title.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
