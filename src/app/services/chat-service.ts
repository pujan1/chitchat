import {Router, ActivatedRoute, Params} from '@angular/router';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class ChatService {
	chatmessages: Array<any> = [];
  userName: string;

  constructor(private http: Http, private activatedRoute: ActivatedRoute) { }

  getBotReply(msg): Observable<string []>{
  	return this.http.post('http://messages.getsandbox.com/messages', msg)
  		.map(response => response.json().message)
  		.catch(error => Observable.throw(error.statusText))
  		
  }

  sendMessage(msg: string){

      this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.userName = params['name'];
        
      });

    
  	this.pushmessage(msg, this.userName);
  	this.getBotReply({message: msg, time: this.getTimeStamp()}).subscribe(
  		(response) => this.pushmessage(response.toString(), 'chatBot'),
      error => console.log(error)
  		);
  }


  pushmessage(msg: string, usr: string){
  	const time = this.getTimeStamp();
  	this.chatmessages.push({
  		message: msg,
  		time: time,
      user: usr
  	})
  }

  getTimeStamp(){
  	var offset = -8;
    const time = new Date( new Date().getTime() + offset * 3600 * 1000).toUTCString().replace( / GMT$/, "" )
  	return (time);
  }

}
