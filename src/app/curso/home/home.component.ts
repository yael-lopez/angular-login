import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user: any = sessionStorage.getItem("user");

  constructor(private router: Router){
    if(!sessionStorage.getItem("user")){
      this.router.navigateByUrl("/login");
    }
  }

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }

}
