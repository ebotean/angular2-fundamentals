import { Routes } from '@angular/router';
import { EventsListComponent } from './app/events-list/events-list.component';
import { EventDetailComponent } from './app/event-detail/event-detail.component';
import { EventRouteActivator } from './app/event-detail/event-route-activator.service';
import { CreateEventComponent } from './app/create-event/create-event.component';
import { Error404Component } from './app/errors/404.component';

export const appRoutes:Routes = [
	{path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']}, 
	{path: 'events', component: EventsListComponent}, 
	{path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivator]}, 
	{path: '404', component: Error404Component}, 
	{path: '', redirectTo: '/events', pathMatch: 'full'} 
]