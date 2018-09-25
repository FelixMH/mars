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

  listaEstudiantes: Estudiante[];

  // Constantes
  DEFAULT_PICTURE: 'http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png';

  constructor() { }

  ngOnInit() {
    console.log('Inicializando el componente Material List');
    this.estudiante1 = {
      id: 1,
      nombre: 'Felix Martinez',
      ciudad: 'Torreon,Coahuila',
      photo: 'http://i.imgur.com/lPBJXJL.png'
    };
    this.estudiante2 = {
      id: 2,
      nombre: 'Luz María H. S',
      ciudad: 'Torreon,Coahuila',
      photo: 'https://www.ucar.edu/communications/staffnotes/0801/images/laidlaw.jpg'
    };
    this.estudiante3 = {
      id: 3,
      nombre: 'Felix Martinez Rangel',
      ciudad: 'Torreon,Coahuila'
    };
    this.estudiante4 = {
      id: 4,
      nombre: 'Barbara Martinez',
      ciudad: 'Torreon,Coahuila',
      photo: 'https://www2.ucar.edu/sites/default/files/staffnotes/2008/jaclyn.jpg'
    };

    this.listaEstudiantes = [
      this.estudiante1,
      this.estudiante2,
      this.estudiante3,
      this.estudiante4
    ];
  }

}
