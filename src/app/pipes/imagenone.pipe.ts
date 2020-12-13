import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Pipe({
  name: 'imagenone'
})
export class ImagenonePipe implements PipeTransform {

  url = 'assets/image/noimage.png';
  constructor(private _http:HttpClient)
  {
    
  }

  transform(value: any, args?: any): any 
  {
    return true
  }

}
