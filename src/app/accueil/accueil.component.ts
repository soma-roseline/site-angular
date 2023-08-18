import { Component, OnInit } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  


  singletitle!: string
  singleparagraphe!: string
  button!: string

  formtitle!: string

  ngOnInit(){

   
    


  this.singletitle = 'Changeons le monde avec humanité';
  this.singleparagraphe = 'Tous les Hommes naissent libres et égaux. Nous portons notre assistance aux personnes dans le besoin dans différents domaines jugés prioritaires.';
  this.button = 'Commencer';

  this.formtitle = 'Obtenez un essai GRATUIT de 30 jours'
}

}
