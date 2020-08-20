import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})

export class ProductItemComponent implements OnInit {

  @Input() productType : string;
  @Input() productQuantity : number;
  @Input() productPrice : number;
  @Input() extractionDate : Date;
  @Input() fishingZone : string;
  @Input() currentLocation : string;


  constructor() { }

  ngOnInit() {}

}
