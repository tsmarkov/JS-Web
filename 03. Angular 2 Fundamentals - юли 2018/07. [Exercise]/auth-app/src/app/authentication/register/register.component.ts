import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  private user = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(3)]],
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    age: ['', [Validators.min(0)]]
  })

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
  }

  register() {
    this.user.removeControl('confirmPassword');

    this.authService.register(this.user.value)
      .subscribe(
        data => {
          this.router.navigate(['/login'])
        },
        error => {
          console.error(error)
        });
  }
}
