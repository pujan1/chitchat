import { Injectable } from '@angular/core';

@Injectable()
export class DateService {
	
	getTimeStamp(){
	    const time = new Date().toLocaleString(); 	
	    return (time);
	 }

}
