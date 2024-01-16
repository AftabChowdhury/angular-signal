import { Component, computed } from '@angular/core';
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
  sellItems = computed(()=> {
    return this.stateService.itemsSignal()?.filter(item => item.type === 'Sell');
  });
  constructor(
    private stateService: StateService
  ) {
  }
}
