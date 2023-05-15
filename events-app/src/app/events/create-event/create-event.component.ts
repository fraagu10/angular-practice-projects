import { EventService } from './../shared/events.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty: boolean = true;
  newEvent: any;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(["/events"]);
  }

  saveNewEvent(formValues: any) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

}
