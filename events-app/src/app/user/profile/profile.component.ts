import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    let firstName = new FormControl(this.authService.currentUser?.firstName);
    let lastName = new FormControl(this.authService.currentUser?.lastName);

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName,
    });

  }

  cancel() {
    this.router.navigate(["events"]);
  }

  saveProfile(formValues: any) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);

    this.router.navigate(["events"]);
  }

}
