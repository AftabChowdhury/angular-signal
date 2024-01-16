import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { BuyComponent } from './buy/buy.component';
import { NgFor } from '@angular/common';
import { SellComponent } from './sell/sell.component';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [BuyComponent, NgFor, SellComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
})
export class ItemListComponent implements OnInit {
  constructor(private stateService: StateService) {
  }

  ngOnInit(): void {
    this.stateService.getItems().subscribe(data => {
      console.log('Items: ', data);
    });
  }
}
