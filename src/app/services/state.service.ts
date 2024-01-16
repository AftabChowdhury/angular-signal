import { Injectable, signal } from '@angular/core';
import { Item } from '../model/item';
import { mock_items } from '../mock-data/item.mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  itemsSignal = signal<Item[]>([]);

  getItems(): Observable<Item[]> {
    this.itemsSignal.set(mock_items);
    return of(mock_items);
  }

}
