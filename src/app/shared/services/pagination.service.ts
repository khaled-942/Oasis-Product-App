import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  pageNumber = new BehaviorSubject(1);
  pageNumberobserv = this.pageNumber.asObservable()
  constructor() { }
  setNewPageNumber(pageNumber: number) {
    this.pageNumber.next(pageNumber)
  }
}
