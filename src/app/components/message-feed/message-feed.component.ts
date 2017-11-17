import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat-service'

@Component({
  selector: 'app-message-feed',
  templateUrl: './message-feed.component.html',
  styleUrls: ['./message-feed.component.scss']
})
export class MessageFeedComponent  {
	


  constructor(private chat: ChatService) { }

  message = this.chat.chatmessages;


}
