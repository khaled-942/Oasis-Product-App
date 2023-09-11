import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderstatusService {
  pageLoaded = new BehaviorSubject(true);
  pageLoadedObserv = this.pageLoaded.asObservable()
  constructor() { }
  toggleStauts(status:boolean){
    this.pageLoaded.next(status);
  }
}
