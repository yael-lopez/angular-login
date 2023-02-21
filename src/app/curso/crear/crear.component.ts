import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { CursoServiceService } from '../service/curso-service.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {

  constructor(private cursoService: CursoServiceService){ }

  guardar(miFormulario: NgForm){
    const nombre = miFormulario.controls["nombre"].value;
    const inicio = miFormulario.controls["inicio"].value;
    const fin = miFormulario.controls["fin"].value;
    const horas = miFormulario.controls["horas"].value;
    const costo = miFormulario.controls["costo"].value;
    if(nombre.trim() === "" || inicio.trim() === "" || fin === "" || horas === "" || costo === ""){
      Swal.fire("Advertencia", "Todos los campos son obligatorios", "warning");
      return;
    }
    this.cursoService.guardar(nombre, inicio, fin, horas, costo)
      .subscribe(data => {
        if(data.estado){
          miFormulario.resetForm({
            nombre: "",
            inicio: "",
            fin: "",
            horas: "",
            costo: ""
          });
          Swal.fire("Good Job!", data.mensaje, "success");
        }else{
          Swal.fire("¡Error!", data.mensaje, "error");
        }
      })
  }

}
