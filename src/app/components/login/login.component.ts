import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	value: string;

  constructor(private router: Router) { }


  login() {
  this.router.navigate(['/chat'], { queryParams: { name: this.value } });
}

}
