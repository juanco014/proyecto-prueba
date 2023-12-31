import {Component, OnInit} from '@angular/core';
import {Sala} from "../model/sala";
import {SalaService} from "../service/sala.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar-sala',
  templateUrl: './listar-salas.component.html',
  styleUrls: ['./listar-salas.component.css']
})

export class ListarSalasComponent implements OnInit{
  public salas: Array<Sala> = [];
  public nombreSala!:String;
  public salaSelected!:Sala;
  public selected: boolean=false;

  constructor(private salaService: SalaService, private routerPath: Router, private router: ActivatedRoute) {
    this.salaService.getSalas().subscribe
    ( (salas:  Array<Sala>)=> {
        this.salas = salas;
      }
    );
  }

  ngOnInit(): void {

  }

    /**
    * Evento que se dispara al seleccionar un curso en la lista
* @param sala Sala seleccionado
*/
  onselected(sala: Sala) {
    this.salaSelected = sala;
    this.selected = true;
    this.routerPath.navigate(['editar/', + this.salaSelected.id]); //cositas aparte
  }

  borrarSala(sala: Sala) {
    Swal.fire({
     title: "esta seguro?",
     text: "usted no puede revetir esto!",
     icon: "warning",
     showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor: "#d33",
     confirmButtonText: "Si, borrar la sala!"
     }).then((result) => {
     if (result.isConfirmed) {
     this.salaService.borrarSala(sala.id).subscribe( () => {
     Swal.fire({
     title: "eliminado!",
     text: "la sala a sido eliminada.",
     icon: "success"
     });
     this.salas= this.salas.filter(((c) => c !== sala));
     });
     }
     });

  }

  /**
   * metodo que redireccionea crear
   */
  crearSala() {
    this.routerPath.navigate(['/crear']);
  }
}
