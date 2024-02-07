import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate total price', () => {
    const expectedTotalPrice = service.itemsSignal().reduce((a, b) => a + (b.quantity * b.price), 0);
    expect(service.totalPrice()).toBe(expectedTotalPrice);
  });

  it('should return items', (done: DoneFn) => {
    service.getItems().subscribe(items => {
      expect(items).toBeTruthy();
      expect(items.length).toBeGreaterThan(0);
      done();
    });
  });

  describe('addQuantity', () => {
    it('should add quantity to an existing item', () => {
      const itemId = 1;
      const quantity = 5;

      service.itemsSignal.set([{
        id: 1,
        name: "",
        quantity: 5,
        price: 0,
        category: "",
        type: "",
      }]);
      const oldItem = service.itemsSignal().find(item => item.id === itemId);

      service.addQuantity(itemId, quantity);

      const updatedItem = service.itemsSignal().find(item => item.id === itemId);
      expect(updatedItem).toBeTruthy();
      expect(oldItem).toBeTruthy();
      if (updatedItem && oldItem) {
        expect(updatedItem.quantity).toBe(oldItem.quantity + quantity);
      }
    });
  });

  it('should not update quantity for non-existing item', () => {
    const itemId = -1;
    const quantity = 5;

    spyOn(console, 'error');

    service.addQuantity(itemId, quantity);

    expect(console.error).toHaveBeenCalledWith(`Item with id ${itemId} not found.`);
  });
});
