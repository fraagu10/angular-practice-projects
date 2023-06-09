import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../../shared/event.model';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styles: [`
  em {float:right; color:#E05C65; padding-left:10px;}
  .error input, .error select, .error textarea {background-color:#E3C3C5;}
  .error ::-webkit-input-placeholder { color: #999; }
  .error :-moz-placeholder { color: #999; }
  .error ::-moz-placeholder {color: #999; }
  .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateSessionComponent implements OnInit {

  // newSessionForm: FormGroup = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   presenter: new FormControl('', Validators.required),
  //   duration: new FormControl('', Validators.required),
  //   level: new FormControl('', Validators.required),
  //   abstract: new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])])
  // })

  newSessionForm!: FormGroup;
  name!: FormControl;
  presenter!: FormControl;
  duration!: FormControl;
  level!: FormControl;
  abstract!: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    // this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])])

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  saveSession(formValues: any) {
    let session:ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    }
    console.log(session)
  }

}
