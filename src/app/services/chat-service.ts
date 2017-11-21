
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

import { DateService } from './date.service'

@Injectable()
export class ChatService {
	chatmessages: Array<any> = [];
  userName: string;
  url: string = 'http://messages.getsandbox.com/messages';

  constructor(private http: Http,  private date: DateService) { }

  getBotReply(msg): Observable<string []>{
  	return this.http.post(this.url, msg)
  		.map(response => response.json().message)
  		.catch(error => Observable.throw(error.statusText))
  		
  }

  sendMessage(msg: string, name: string){
  	this.pushmessage(msg, name);
  	this.getBotReply({message: msg, time: this.date.getTimeStamp()}).subscribe(
  		(response) => this.pushmessage(response.toString(), 'chatBot'),
      error => console.log(error)
  		);
  }


  pushmessage(msg: string, usr: string){
  	const time = this.date.getTimeStamp();
  	this.chatmessages.push({
  		message: msg,
  		time: time,
      user: usr
  	})
  }

}
