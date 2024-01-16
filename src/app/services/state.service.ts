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

  addQuantity(itemId: number, quantity: number) {
    const itemIndex = this.itemsSignal().findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
      this.itemsSignal.update(items =>
        [
          ...items.slice(0, itemIndex),
          {...items[itemIndex], quantity: items[itemIndex].quantity + quantity},
          ...items.slice(itemIndex + 1),
        ]);
    } else {
      console.error(`Item with id ${itemId} not found.`);
    }
  }

}
