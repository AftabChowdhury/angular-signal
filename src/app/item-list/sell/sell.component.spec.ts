import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellComponent } from './sell.component';
import { StateService } from '../../services/state.service';

describe('SellComponent', () => {
  let component: SellComponent;
  let stateService: StateService;
  let fixture: ComponentFixture<SellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellComponent],
      providers: [StateService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellComponent);
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
