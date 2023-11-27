import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SalaService} from "../service/sala.service";
import {Sala} from "../model/sala";


@Component({
  selector: 'app-crear-sala',
  templateUrl: './crear-sala.component.html',
  styleUrls: ['./crear-sala.component.css']
})
export class CrearSalaComponent implements OnInit {
  public crearSalaForm: FormGroup=new FormGroup({
    sala: new FormControl('',[Validators.required,Validators.minLength(4)]),
    programa: new FormControl('',[Validators.required,Validators.minLength(4)]),
  })

  /**
   * Constructor del componente
   * @param router Router de la aplicacion
   * @param formBuilder Formulario de creacion de sala
   * @param salaService Servicio de sala para crear una sala
   */

  constructor(public router:Router,public formBuilder: FormBuilder,private salaService: SalaService) {

  }

  /**
   * metodo que crea una sala
   */
  cancelarCrearSala(){
    this.router.navigate(["/Listar"]);
  }

  /**
   * Metodo que crea un curso en el servicio
   * @param sala
   */

  crearSala(sala: Sala){
    /** this.salaService.crearSala(sala).subscribe(
     (sala:Sala) => {
     Swal.fire(
     'Curso creado',
     `El curso ${sala.sala} ha sido creado con exito`,
     'success'
     );
     this.crearSalaForm.reset();  //Resetea el formulario
     this.router.navigate(['/listar']);
     });
     **/
  }


  ngOnInit(): void {
    this.crearSalaForm = this.formBuilder.group({
      curso: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      programa: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
}
