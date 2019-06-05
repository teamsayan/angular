import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;

  constructor() { 
    this.user = {
      name: 'Foo Bar',
      title: 'Software Developer',
      phone: [
      '123-456-7890',
      '321-654-0987',
      '098-765-4321'
    ]
    
    };
  }

  ngOnInit() {
  }

}
