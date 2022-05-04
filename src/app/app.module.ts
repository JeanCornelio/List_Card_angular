import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaPresentacionComponent } from './tarjeta-presentacion/tarjeta-presentacion.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { CardsComponent } from './cards/cards.component';
import { CardsTemplateComponent } from './cards-template/cards-template.component';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
@NgModule({
  declarations: [
    AppComponent,
    TarjetaPresentacionComponent,
    CardsComponent,
    CardsTemplateComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HighlightModule,
    CardModule,
    FormsModule,
    DialogModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      
      useValue: {
        fullLibraryLoader : ( ) => import( 'highlight.js' ),
        
      }
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
