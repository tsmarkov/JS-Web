import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user.value)
      .subscribe(
        data => {
          let authtoken: string = data['_kmd']['authtoken'];
          let email: string = data['email'];

          sessionStorage.setItem('authtoken', authtoken)
          this.authService.authToken = authtoken;
          this.authService.username = email;

          this.router.navigate(['/'])
        },
        error => {
          console.error(error);
        });
  }
}