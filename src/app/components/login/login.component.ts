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


  handleSubmit(event){
		if(event.keycode == 13) this.login();
	}


  login() {
  this.router.navigate(['/chat'], { queryParams: { name: this.value } });
}

}
