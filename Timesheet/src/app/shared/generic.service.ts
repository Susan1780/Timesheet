import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  public messageSource = new BehaviorSubject('Default_message');
  currentUser = this.messageSource.asObservable();

  constructor() { }

  shareUsername(message: any) {
    this.messageSource.next(message);
  }
}
