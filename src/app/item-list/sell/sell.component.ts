import { Component, computed, inject } from '@angular/core';
import { StateService } from '../../services/state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.scss'
})
export class SellComponent {
  stateService = inject(StateService);
  sellItems = computed(()=> {
    return this.stateService.itemsSignal()?.filter(item => item.type === 'Sell');
  });

  addQuantity(itemId: number) {
    this.stateService.addQuantity(itemId, 1);
  }
}
