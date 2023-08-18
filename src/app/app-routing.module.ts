import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { ProjetsComponent } from './projets/projets.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { ContactComponent } from './contact/contact.component';
import { SingleComponent } from './single/single.component';


const routes: Routes = [

  { path: 'menu', component: MenuComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'nos domaines d\'intervention', component: AboutComponent },
  { path: 'nos projets', component: ProjetsComponent },
  { path: 'nos soldats', component: EquipeComponent },
  { path: 'actualités', component: ActualitesComponent },
  { path: 'entrer en contact', component: ContactComponent },
  /* { path: '', component: SingleComponent, }, */
  { path: '', redirectTo: '/accueil', pathMatch: 'full' } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
