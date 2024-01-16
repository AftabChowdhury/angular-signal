import { Component, computed } from '@angular/core';
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
  buyItems = computed(()=> {
    return this.stateService.itemsSignal()?.filter(item => item.type === 'Buy');
  });
  constructor(
    private stateService: StateService
  ) {
  }

}
