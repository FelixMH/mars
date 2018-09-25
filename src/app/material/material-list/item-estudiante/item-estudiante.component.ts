import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estudiante } from '../../../shared/model/estudiante';

@Component({
  selector: 'dev-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {
  readonly DEFAULT_PICTURE: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

  @Input()
  estudiante: Estudiante;

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onMouseClick = new EventEmitter<Estudiante>();

  constructor() { }

  ngOnInit() {
  }

  onClick(e: Estudiante){
    this.onMouseClick.emit(e);
  }

}
