import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SalaService} from "../service/sala.service";
import {Sala} from "../model/sala";
import Swal from "sweetalert2";


@Component({
  selector: 'app-crear-sala',
  templateUrl: './crear-sala.component.html',
  styleUrls: ['./crear-sala.component.css']
})
export class CrearSalaComponent implements OnInit {
    public crearSalaForm: FormGroup= new FormGroup({
        sala: new FormControl('',[Validators.required,Validators.minLength(4)]),
        programa: new FormControl('',[Validators.required,Validators.minLength(4)])
    });

    /**
     * Constructor del componente
     * @param router Router de la aplicacion
     * @param formBuilder Formulario de creacion de curso
     * @param salaService Servicio de curso para crear un curso
     */
    constructor(public router: Router, public formBuilder: FormBuilder, private salaService: SalaService) {

    }

    /**
     * Metodo que crea un sala
     */
    cancelarCrearSala() {
        this.router.navigate(['/listar']);
    }

    /**
     * Metodo que crea un sala en el servicio
     * @param sala Sala a crear
     */
    crearSala(sala: Sala) {
        this.salaService.crearSala(sala).subscribe(
            (sala: Sala) => {
                // console.log(curso);
                Swal.fire(
                    'Curso creado',
                    `El curso ${sala.sala} ha sido creado con exito`,
                    'success'
                );
                this.crearSalaForm.reset();  //Resetea el formulario
                this.router.navigate(['/listar']);
            });
    }
//regexp: regular expression
    ngOnInit(): void {
        this.crearSalaForm = this.formBuilder.group({
            sala: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
            programa: ['', [Validators.required, Validators.minLength(4)]]
        });
    }
}
