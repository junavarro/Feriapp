import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
