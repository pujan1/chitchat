import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';


import { AppComponent } from './app.component';
import { appRoutes } from '../routes';

import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { LoginComponent } from './components/login/login.component';
import { MessageFeedComponent } from './components/message-feed/message-feed.component';
import { InputComponent } from './components/input/input.component';
import { HeaderComponent } from './components/header/header.component';

import { ChatService } from './services/chat-service';
import { DateService } from './services/date.service';

import { DateDirective } from './directives/date.directive';


@NgModule({
  declarations: [
    AppComponent,
    ChatRoomComponent,
    LoginComponent,
    MessageFeedComponent,
    InputComponent,
    HeaderComponent,
    DateDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
  ],
  providers: [ChatService, DateService],
  bootstrap: [AppComponent]
})

export class AppModule { }
