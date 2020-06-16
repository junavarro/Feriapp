import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  icon = '../../assets/icon/buy.svg';
  constructor() { }

  ngOnInit() {
  }

  /**
   * 
   */
  segmentChanged($event: CustomEvent) {
    console.log($event.detail.value);
    this.icon = `../../assets/icon/${$event.detail.value}.svg`;
  }

}
