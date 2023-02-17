import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../service/auth-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthServiceService, private router: Router){}

  login(miFormulario: NgForm){
    const user = miFormulario.controls["usuario"].value;
    const password = miFormulario.controls["password"].value;
    if(user.trim() === "" || password.trim() === ""){
      Swal.fire("Advertencia", "Todos los campos son obligatorio", "warning");
      return;
    }
    this.authService.login(user, password)
      .subscribe(data => {
        console.log(data)
        if(data.estado){
          sessionStorage.setItem("user", data.user.usuario);
          if(data.user.id_rol === "1"){
            this.router.navigateByUrl("/admin");
          }else{
            this.router.navigateByUrl("/user");
          }
        }else{
          Swal.fire("Advertencia", data.mensaje, "info");
        }
      })
  }

}
