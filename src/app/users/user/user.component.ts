import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private router: Router){
    if(!sessionStorage.getItem("user")){
      this.router.navigateByUrl("/login");
    }
   }

  user: any = sessionStorage.getItem("user");

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }

}
