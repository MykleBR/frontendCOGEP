import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.isAuthenticated().subscribe((status: boolean) => {
      this.loggedIn = status;
    });
  }

  logout() {
    this.authService.logout();
  }
}
