import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class InfyLaptopService {

  constructor() { }

  register(laptopData:any) : Observable<any> {
    return null;
  }

}

