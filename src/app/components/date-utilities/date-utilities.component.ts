import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {NgForm, } from '@angular/forms';

@Component({
  selector: 'app-date-utilities',
  templateUrl: './date-utilities.component.html',
  styleUrls: ['./date-utilities.component.css']
})
export class DateUtilitiesComponent{

	EndTime: any = null;
	StartTime: any = null;
	diffDays:number;
	display:boolean = false;

    myEvent(event) {
	    	var EndDate = new Date(this.EndTime.year,this.EndTime.month,this.EndTime.day);
			var StartDate = new Date(this.StartTime.year,this.StartTime.month,this.StartTime.day);
	    	var timeDiff = EndDate.getTime() - StartDate.getTime();
			this.diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
			this.display = true;
  	}

}
