import { Routes } from '@angular/router';

import { ChatRoomComponent } from './app/components/chat-room/chat-room.component';
import { LoginComponent } from './app/components/login/login.component';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'chat', component: ChatRoomComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full'},
];