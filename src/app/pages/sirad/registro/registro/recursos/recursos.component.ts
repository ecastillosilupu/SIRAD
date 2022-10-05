import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.scss']
})
export class RecursosComponent implements OnInit {

  dataFichasEvaluacion = [];

  constructor(
    private _router: Router
  ) {
    for (let a = 0; a < 5; a++) {
      this.dataFichasEvaluacion.push(
        {
          numId: (a + 1),
          txtNombre: 'Ficha Evaluación ' + (a + 1),
          bolEstado: 'Pendiente'
        }
      );
    }
    this.dataFichasEvaluacion
   }

  ngOnInit(): void {
  }

  add(){
    this._router.navigate(['/sirad/registro/recursos-add']).then(() => { });
  }

  async ngAsignarEvento(item: any) {
    const { value: fruit } = await Swal.fire({
      title: 'Seleccionar Evento',
      input: 'select',
      inputOptions: {
        'evento_1': 'Evento 1',
        'evento_2': 'Evento 2',
        'evento_3': 'Evento 3',
        'evento_4': 'Evento 4',
        'evento_5': 'Evento 5',
        'evento_6': 'Evento 6'
      },
      inputPlaceholder: 'Seleccionar Evento',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          resolve('');
        })
      }
    })
    
    if (fruit) {
      item.bolEstado = `Asignado al evento: ${fruit}`;
      Swal.fire(`Asignado al evento: ${fruit}`)
    }
  }

}
