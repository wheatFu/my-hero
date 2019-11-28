import { HeroDetaisComponent } from './hero-detais/hero-detais.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { NameEditorComponent } from './name-editor/name-editor.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'heros', component: HerosComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetaisComponent},
  {path: 'form', component: NameEditorComponent},
];

@NgModule({
  // 通常不会在router中声明组件
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],

})
export class AppRoutingModule {
}
