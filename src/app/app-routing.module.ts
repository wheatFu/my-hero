import { HeroDetaisComponent } from './hero-detais/hero-detais.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { FormMbqdComponent } from './form-mbqd/form-mbqd.component';
import { GaEtpsOpenComponent } from './ga-etps-open/ga-etps-open.component';
import { ActiveFormComponent } from './active-form/active-form.component';


const gaRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'heros', component: HerosComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetaisComponent},
  {path: 'form', component: NameEditorComponent},
  {path: 'mbqd', component: FormMbqdComponent},
  {path: 'dwkh', component: GaEtpsOpenComponent},
  {path: 'activefprm', component: ActiveFormComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(gaRoutes)
  ],
  exports: [ RouterModule ],

})
export class AppRoutingModule {
}
