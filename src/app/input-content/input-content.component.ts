import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-content',
  templateUrl: './input-content.component.html',
  styleUrls: ['./input-content.component.css']
})
export class InputContentComponent implements OnInit {

  phone: string;

  constructor() { }

  ngOnInit() {
  }

}
