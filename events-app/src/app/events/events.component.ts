import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events.service';

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events?: any[];

  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

}
