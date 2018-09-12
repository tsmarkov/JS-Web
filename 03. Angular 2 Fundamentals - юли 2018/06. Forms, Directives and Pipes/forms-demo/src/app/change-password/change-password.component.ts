import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  passwordForm = this.fb.group({
    oldPassword: ['asd', [Validators.required, Validators.minLength(3)]],
    newPassword: ['', [Validators.required, Validators.minLength(3)]],
    confirmNewPassword: ['', [Validators.required, Validators.minLength(3)]]
  })

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.passwordForm);
  }
}
