import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	templateUrl: 'create-event.component.html'
})
export class CreateEventComponent {

	isDirty: boolean = false;
	constructor(private router: Router) {}

	cancel() {
	
		if (!this.isDirty)
			this.router.navigate(['/events']);
	}
}