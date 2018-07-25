import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  loggedIn: boolean;
  username:string='';
  subscription: Subscription;
  subscription2: Subscription;
  constructor(private authsvc: AuthService, private router: Router) {

   }

  ngOnInit() {
    this.subscription = this.authsvc.loggedin.subscribe((loggedin: boolean)=>{
      this.loggedIn = loggedin;
    })
    this.subscription2 = this.authsvc.username.subscribe((username: string)=>{
      this.username = username;
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onLogout(){
    this.authsvc.loggedin.next(false);
    this.router.navigate(['home']);
  }
}
