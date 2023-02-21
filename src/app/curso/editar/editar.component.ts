import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { CursoServiceService } from '../service/curso-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  urlTree: any;
  id: any;
  nombre: any;
  inicio: any;
  fin: any;
  hora: any;
  costo: any;

  constructor(private cursoService: CursoServiceService, private router: Router, private rutaActiva: ActivatedRoute){

    this.id = this.rutaActiva.snapshot.params["id"]

    this.ver(this.id)
    
    
   }

   ver(id: any){
    this.cursoService.buscar(id)
      .subscribe(data => {
        this.nombre = data.curso.nombre;
        this.inicio = data.curso.fecha_inicio;
        this.fin = data.curso.fecha_fin;
        this.hora = data.curso.horas;
        this.costo = data.curso.costo;
      })
   }

  guardar(miFormulario: NgForm){
    const nombre = miFormulario.controls["nombre"].value;
    const inicio = miFormulario.controls["inicio"].value;
    const fin = miFormulario.controls["fin"].value;
    const horas = miFormulario.controls["horas"].value;
    const costo = miFormulario.controls["costo"].value;
    console.log(costo)
    if(nombre.trim() === "" || inicio.trim() === "" || fin === "" || horas === "" || costo === ""){
      Swal.fire("Advertencia", "Todos los campos son obligatorios", "warning");
      return;
    }
    this.cursoService.actualizar(nombre, inicio, fin, horas, costo, this.id)
      .subscribe(data => {
        console.log(data)
        if(data.estado){
          Swal.fire("Good Job!", data.mensaje, "success");
        }else{
          Swal.fire("¡Error!", data.mensaje, "error");
        }
      })
  }

}
