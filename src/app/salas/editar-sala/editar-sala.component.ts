import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SalaService} from "../service/sala.service";
import {Sala} from "../model/sala";
//import Swal from "sweetalert2";

@Component({
  selector: 'app-editar-sala',
  templateUrl: './editar-sala.component.html',
  styleUrls: ['./editar-sala.component.css']
})

export class EditarSalaComponent implements OnInit {
// Creamos e inicializamos el formulario editarCursoForm usando el constructor de FormGroup
  public editarSalaForm: FormGroup = new FormGroup( {
    id: new FormControl('',[Validators.required,Validators.minLength(4)]),
    curso: new FormControl('',[Validators.required,Validators.minLength(4)]),
    programa: new FormControl('',[Validators.required,Validators.minLength(4)])
  })
  public sala!: Sala;


  /**
   * Constructor del componente
   * @param router Router de la aplicacion
   * @param formBuilder Formulario de creacion de sala
   * @param salaService Servicio de sala para crear una sala
   * @param route
   */

  constructor(public router:Router,public formBuilder: FormBuilder,private salaService: SalaService, private route:ActivatedRoute) {

  }

  /**
   * metodo que crea una sala
   */
  cancelarEditarSala(){
    this.router.navigate(["/Listar"]);
  }

  /**
   * Metodo que edita un curso en el servicio
   * @param sala
   */

  editarSala(sala: Sala){
    /**this.salaService.editarSala(sala).subscribe(
     (sala:Sala) => {
     Swal.fire(
     'Curso creado',
     `La sala ${sala.sala} ha sido editado con exito`,
     'success'
     );
     });
     **/
  }

  ngOnInit(): void {
    const idSala:number = parseInt(this.route.snapshot.params["id"]);

    this.salaService.getSala(idSala).subscribe((sala:Sala) => {
      this.sala= sala;

      this.editarSalaForm = this.formBuilder.group({
        id: [this.sala.id,[]],
        curso: [this.sala.sala, [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
        programa: [this.sala.programa, [Validators.required, Validators.minLength(4)]]
      });
    });
  }
}
