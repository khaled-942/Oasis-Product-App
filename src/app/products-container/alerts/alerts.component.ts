import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { SearchService } from 'src/app/shared/services/search.service';
import { UserLoginService } from 'src/app/shared/services/user-login.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  authrized!: boolean
  empty: boolean = false;
  orderPlaced!:boolean
  constructor(private userlogin: UserLoginService, private route: Router, private search: SearchService, private orderFlag:CartService) { }

  ngOnInit(): void {
    this.userlogin.userLoginObserv.subscribe((data: any) => { this.authrized = data })
    this.orderFlag.orderFlagobserv.subscribe((data: any) => { this.orderPlaced = data })
    this.search.searchItemsobserv.subscribe((data: any) => { data <= 0 ? this.empty = true : this.empty = false })
  }
  toLogIn() {
    this.route.navigate(['login'])
  }
  toggleOrderFlag(){
    this.orderFlag.toggleFlag(false)
  }
}
