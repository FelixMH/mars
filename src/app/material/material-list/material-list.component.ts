import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';

@Component({
  selector: 'dev-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1: Estudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;
  estudiante4: Estudiante;

  constructor() { }

  ngOnInit() {
    console.log('Inicializando el componente Material List');
    this.estudiante1 = {
      id: 1,
      nombre: 'Felix Martinez',
      ciudad: 'Torreon,Coahuila'
    };
    this.estudiante2 = {
      id: 2,
      nombre: 'Luz María H. S',
      ciudad: 'Torreon,Coahuila'
    };
    this.estudiante3 = {
      id: 3,
      nombre: 'Felix Martinez Rangel',
      ciudad: 'Torreon,Coahuila'
    };
    this.estudiante4 = {
      id: 4,
      nombre: 'Barbara Martinez',
      ciudad: 'Torreon,Coahuila'
    };
  }

}
