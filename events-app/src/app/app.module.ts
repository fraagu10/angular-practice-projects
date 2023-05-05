import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavComponent } from './nav/nav/nav.component';
import { EventService } from './events/shared/events.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { PageNotFoundComponent } from './events/error/page-not-found.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EventService,
    EventRouteActivatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
