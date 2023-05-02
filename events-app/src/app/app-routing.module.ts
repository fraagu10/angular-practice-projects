import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './events/create-event/create-event.component';

const routes: Routes = [
  { path: "events", component: EventsComponent },
  { path: "create-event", component: CreateEventComponent },
  { path: "events/:id", component: EventDetailsComponent},
  { path: "", redirectTo: "/events", pathMatch: "full"},
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
