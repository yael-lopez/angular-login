import { Component } from '@angular/core';
import { CursoServiceService } from '../service/curso-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  cursos: any;

  constructor(private cursoService: CursoServiceService, private router: Router) {
    this.ver()
  }

  ver(){
    this.cursoService.listar()
      .subscribe(data => {
        const d = eval("(" + data + ")");
        this.cursos = d.data;
      })
  }

  borrar(id: number){
    Swal.fire({
      title: '¿Seguro que quieres borrar este registro?',
      text: "¡Una vez eliminado no se podra recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, ¡borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cursoService.delete(id)
          .subscribe(data => {
            console.log(data)
            if(data.estado){
              Swal.fire({
                title: '¡Good Job!',
                text: data.mensaje,
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
              }).then((result) => {
                if (result.isConfirmed) {
                  this.router.navigateByUrl("/curso/listado");
                }
              })
            }else{
              Swal.fire("¡Error!", data.mensaje, "error");
            }
          })
      }
    })
  }

}
