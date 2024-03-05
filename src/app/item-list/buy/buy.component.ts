import { Component, computed, inject } from '@angular/core';
import { StateService} from '../../services/state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.scss'
})
export class BuyComponent {
  stateService = inject(StateService);
  buyItems = computed(()=> {
    return this.stateService.itemsSignal()?.filter(item => item.type === 'Buy');
  });
  addQuantity(itemId: number) {
    this.stateService.addQuantity(itemId, 1);
  }

}
