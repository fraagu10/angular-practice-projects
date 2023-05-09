import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName?: string;
  password: any;

  constructor() { }

  ngOnInit(): void {
  }

  login(formValues: FormData) {
    console.log(formValues);
  }

}
