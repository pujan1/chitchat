import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat-service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit{
	message: string;
  userName: string;

    constructor(private chat: ChatService, private activatedRoute: ActivatedRoute, private router: Router,) { }

	handleSubmit(event){
		if(event.keycode == 13) this.send();
	}


  ngOnInit(){

      this.activatedRoute.queryParams.subscribe((params: Params) => {
        if (params['name'] == '' || params['name'] == undefined ) {
          this.router.navigate(['/login']);
          alert("please enter name to chat with the bot")
        }
        else
          this.userName = params['name'];
      });

  }

  send(){
  	this.chat.sendMessage(this.message, this.userName);
    this.message = '';
  }

}
