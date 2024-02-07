import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyComponent } from './buy.component';
import { StateService } from '../../services/state.service';

describe('BuyComponent', () => {
  let component: BuyComponent;
  let stateService: StateService;
  let fixture: ComponentFixture<BuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyComponent],
      providers: [StateService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyComponent);
    component = fixture.componentInstance;
    stateService = TestBed.inject(StateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call stateService.addQuantity with correct parameters', () => {
    const itemId = 123;
    const addQuantitySpy = spyOn(stateService, 'addQuantity');

    component.addQuantity(itemId);

    expect(addQuantitySpy).toHaveBeenCalledWith(itemId, 1);
  });
});
