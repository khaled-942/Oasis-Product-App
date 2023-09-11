import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchText = new BehaviorSubject('');
  searchTextobserv = this.searchText.asObservable();
  searchitems = new BehaviorSubject(1);
  searchItemsobserv = this.searchitems.asObservable();
  constructor() { }
  setSearchText(text: string) {
    this.searchText.next(text)
  }
  setSearchItems(num: number) {
    this.searchitems.next(num)
  }
}
