import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  userForm = new FormGroup({
    'currentPassword': new FormControl(''),
    'newPassword': new FormControl(''),
    'matchPassword': new FormControl('')
  })

  constructor() {
  }

  save() {
    console.log(this.userForm.value);
  }

  ngOnInit() {
  }

}
