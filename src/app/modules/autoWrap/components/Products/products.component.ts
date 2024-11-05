import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-model',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class productsComponent implements OnInit {

  @Input('id') id: string;
  constructor() { }

  ngOnInit(): void {
  }

}
