import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../service/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  data: {} = {};

  constructor(private authService: AuthServiceService){}

  registro(miFormulario: NgForm){
    const user = miFormulario.controls["usuario"].value;
    const password = miFormulario.controls["password"].value;
    const rol = parseInt(miFormulario.controls["rol"].value);
    if(user.trim() === "" || password.trim() === "" || rol === 0){
      Swal.fire("Advertencia", "Todos los campos son obligatorios", "warning");
      return;
    }
    this.authService.registro(user, password, rol)
      .subscribe(data => {
        if(data.estado){
          miFormulario.resetForm({
            usuario: "",
            password: ""
          });
          Swal.fire("Good Job", data.mensaje, "success");
        }else{
          Swal.fire("Error", data.mensaje, "error");
        }
      })
  }

}
