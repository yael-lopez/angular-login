import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

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
