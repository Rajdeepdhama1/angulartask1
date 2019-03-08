import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

import { details} from './mock-data';
@Injectable()
export class CommonService {
constructor() { }
getCharacters(): Observable<any[]>{
  return of(details);
}
getColumns(): string[]{
  return ["firstname", "lastname", "id", "phoneno","email","designation","dob"]};
}
