import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { PageNotFoundComponent } from './events/error/page-not-found.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-resolver.service';
import { UserModule } from './user/user.module';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';

const routes: Routes = [
  {
    path: "events", component: EventsComponent,
    resolve: { events: EventListResolver }
  },
  {
    path: "events/create-event", component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"]
  },
  {
    path: "events/sessions/create-session", component: CreateSessionComponent
  },
  {
    path: "events/:id", component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService]
  },
  { path: "", redirectTo: "/events", pathMatch: "full" },
  { path: "404", component: PageNotFoundComponent },
  {
    path: "user",
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
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
