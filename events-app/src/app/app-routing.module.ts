import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { PageNotFoundComponent } from './events/error/page-not-found.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';

const routes: Routes = [
  { path: "events", component: EventsComponent },
  { path: "create-event", component: CreateEventComponent },
  { 
    path: "events/:id", component: EventDetailsComponent, 
    canActivate: [EventRouteActivatorService] 
  },
  { path: "", redirectTo: "/events", pathMatch: "full" },
  { path: "404", component: PageNotFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
