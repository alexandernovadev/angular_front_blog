import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Pipe({
  name: 'maxchr'
})
export class MaxchratersPipe implements PipeTransform {


  constructor(private _http:HttpClient)
  {
    
  }

  transform(value: any, args?: any): any 
  {
    return value.substring(0,20);
  }

}
