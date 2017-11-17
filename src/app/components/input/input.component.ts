import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat-service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
	message: string;

    constructor(private chat: ChatService) { }

	handleSubmit(event){
		if(event.keycode == 13) this.send();
	}

  send(){
  	this.chat.sendMessage(this.message);
    this.message = '';
  }

}
