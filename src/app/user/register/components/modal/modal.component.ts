import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {

  constructor(private router: Router) { }

  goToRegistrationPage(userType: string) {
    this.router.navigate(['/register'], {queryParams: {user: userType}});
  }

}
