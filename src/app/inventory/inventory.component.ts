import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { Device, InventoryService } from './inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
  providers: [InventoryService]
})
export class InventoryComponent implements OnInit {

  devices$: Observable<Device[]>;
  private selectedId: number;

  constructor(
    private service: InventoryService
  ) {}

  ngOnInit() {
    this.devices$ = this.service.getDevices();
  }
}
