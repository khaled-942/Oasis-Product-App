import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/shared/services/user-login.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  authrized!: boolean
  constructor(private userlogin: UserLoginService, private route: Router) { }

  ngOnInit(): void {
    this.userlogin.userLoginObserv.subscribe((data: any) => { this.authrized = data })

  }
  toLogIn() {
    this.route.navigate(['login'])
  }
}
