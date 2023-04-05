import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BajaAlumno';
  form: FormGroup;
  miFormularioBuscador: FormGroup;
  miFormularioAccionesOrientador: FormGroup;
  miFormularioBaja: FormGroup;

  constructor() {
    this.form = new FormGroup({
      select1: new FormControl('', Validators.required),
      select2: new FormControl('', Validators.required)
    });

    this.miFormularioBuscador = new FormGroup({
      matricula: new FormControl('', [Validators.required, Validators.min(1)]),
      periodo: new FormControl('', Validators.required)
    })

    this.miFormularioAccionesOrientador = new FormGroup({
      acciones: new FormControl('', Validators.required)
    })

    this.miFormularioBaja = new FormGroup({
      tipo: new FormControl('', Validators.required),
      causa: new FormControl('', Validators.required),
      motivo: new FormControl('', Validators.required)
    })
  }


  get select1() {
    return this.form.get('select1');
  }

  get select2() {
    return this.form.get('select2');
  }

  get matricula() {
    return this.miFormularioBuscador.get('matricula');
  }

  get periodo() {
    return this.miFormularioBuscador.get('periodo');
  }

  get acciones() {
    return this.miFormularioAccionesOrientador.get('acciones');
  }

  get tipo() {
    return this.miFormularioBaja.get('tipo');
  }

  get causa() {
    return this.miFormularioBaja.get('causa');
  }

  get motivo() {
    return this.miFormularioBaja.get('motivo');
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Enviar información del formulario
    }
  }

  buscar() {
  // Consulta a la base de datos
  }


  baja() {
    Swal.fire({
      title: 'Estas seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Comenzar proceso'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Bien hecho!',
          'El proceso ha comenzado',
          'success'
        )
        this.miFormularioBuscador.reset()
      }
    })
  }
}
