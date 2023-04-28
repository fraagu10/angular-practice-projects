import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/events.service';

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events?: any[];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.events = this.eventService.getAllEvents();
  }

}
