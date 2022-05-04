import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-presentacion',
  templateUrl: './tarjeta-presentacion.component.html',
  styleUrls: ['./tarjeta-presentacion.component.css']
})
export class TarjetaPresentacionComponent implements OnInit {
  @Input() nombre=""
  @Input() bio=""
  @Input() frase=""
  imgProgramador = "assets/img/programador.png"


  constructor() { }

  ngOnInit(): void {
  }

}
