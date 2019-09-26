import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetaisComponent } from './hero-detais/hero-detais.component';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetaisComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
