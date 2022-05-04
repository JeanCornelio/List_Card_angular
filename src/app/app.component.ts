import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Practicas_Angular';
  htmlFather=`<app-tarjeta-presentacion 
  nombre="Jean Cornelio"
  bio="Nació el 4 de Octubre de 1997"
  frase="El talento que se crea con esfuerzo derrota al talento natural.">
</app-tarjeta-presentacion>
`

htmlSon=`<div class="card text-center my-4 border-0 shadow" style="width: 25rem;">
  <div class="card-body my-2 fs-5">
      <div class=" border-0 my-2">
        <img [src]="imgProgramador" class="img-fluid rounded-circle imgProg bg-warning" alt=" Foto Programador">
      </div>
      <p class="font-monospace my-3"><span class="fw-bold">Nombre:</span> {{nombre}}</p>
      <p class="font-monospace my-3"><span class="fw-bold">Biografia:</span> {{bio}}</p>
      <span class="lead fs-6 ">{{frase}}</span>
  </div>
</div>   
`
codeTs=`@Input() nombre=""
@Input() bio=""
@Input() frase=""
imgProgramador = "assets/img/programador.png"
`

css=`.card{
  background: linear-gradient(#251D3A 100px, #251D3A 115px, rgba(245,248,250,8) 12px) !important;
}

.imgProg{
  max-height: 150px;
  max-width: 150px;
}
`
}
