import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./shared/events.service";
import { map } from "rxjs";

@Injectable()
export class EventListResolver implements Resolve<any> {

  constructor(private eventService: EventService) {

  }

  resolve() {
    return this.eventService.getAllEvents().pipe(map(events => events));
  }
}