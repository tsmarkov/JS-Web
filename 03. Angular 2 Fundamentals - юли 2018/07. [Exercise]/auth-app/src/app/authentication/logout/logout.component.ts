import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.logout()
      .subscribe(
        data => {
          sessionStorage.removeItem('authtoken');
          this.authService.authToken = undefined;
          this.authService.username = undefined;

          this.router.navigate(['/home']);
        },
        error => {
          console.error(error);
        });
  }
}
