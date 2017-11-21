import {Router, ActivatedRoute, Params} from '@angular/router';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';
import { DateService } from './date.service'

@Injectable()
export class ChatService {
	chatmessages: Array<any> = [];
  userName: string;

  constructor(private http: Http, private activatedRoute: ActivatedRoute, private router: Router, private date: DateService) { }

  getBotReply(msg): Observable<string []>{
  	return this.http.post('http://messages.getsandbox.com/messages', msg)
  		.map(response => response.json().message)
  		.catch(error => Observable.throw(error.statusText))
  		
  }

  sendMessage(msg: string){

      this.activatedRoute.queryParams.subscribe((params: Params) => {

        if (params['name'] == '' || params['name'] == undefined ) {
          this.router.navigate(['/login']);
          alert("please enter name to chat with the bot")
        }
        else
          this.userName = params['name'];

      });

    
  	this.pushmessage(msg, this.userName);
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
