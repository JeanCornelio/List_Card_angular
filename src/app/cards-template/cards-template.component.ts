import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cards-template',
  templateUrl: './cards-template.component.html',
  styleUrls: ['./cards-template.component.css']
})
export class CardsTemplateComponent implements OnInit {
  @Input() id=0
  @Input() image_avatar =""
  @Input() first_name=""
  @Input() last_name=""
  @Input() job=""
  @Input() street_addres=""
  
  @Output() idperfil= new EventEmitter()

  
  idPerfil(id:number){
  this.idperfil.emit(id.toString())
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
