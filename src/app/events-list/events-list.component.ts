import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event-service';
import { ToastrService } from '../common/toastr-service';

@Component({
  template: `
	  	<div>
			<h1>Upcoming Angular Events</h1>
			<hr />
			<div class="row">
				<div *ngFor="let event of events" (click)="handleEventClicked(event.name)" class="col-md-5 event-column">
	  				<event-thumbnail [event]="event"></event-thumbnail>
	  			</div>
			</div>
		</div>
  `,
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
	
	events: any[];

	constructor(private toastr: ToastrService, private eventService: EventService) {}

	ngOnInit() {
		this.events = this.eventService.getEvents();
	}

	handleEventClicked(eventName:string) {
		this.toastr.success("The event "+eventName+" was clicked", eventName);
	}
}
