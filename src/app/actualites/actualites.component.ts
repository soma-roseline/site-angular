import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {
  blogtitle! : string
  blogparagraphe! : string

  cardimage1! : string
  cardsurtitre1! : string 
  cardtitre1! : string
  carddescription1! : string
  cardbutton1! : string

  cardimage2! : string
  cardsurtitre2! : string 
  cardtitre2! : string
  carddescription2! : string
  cardbutton2! : string
  
  cardimage3! : string
  cardsurtitre3! : string 
  cardtitre3! : string
  carddescription3! : string
  cardbutton3! : string 

  cardimage4! : string
  cardsurtitre4! : string 
  cardtitre4! : string
  carddescription4! : string
  cardbutton4! : string

  ngOnInit () {
    this.blogtitle = 'ACTUALITES';
    this.blogparagraphe = 'Les Equipes de Hope&Charity se mobilisent tous les jours et se battent pour un meilleur respect des droits humains. Découvrez l impact de nos actions.';

    this.cardimage1 = '../../assets/images/image12.jpg';
    this.cardsurtitre1 = 'Salubrité';
    this.cardtitre1 = 'Nos bénévoles s engagent';
    this.carddescription1 = 'Le vendredi 28 juillet, les bénévoles de Hope&Charity ont organisé une journée de salubrité au sein du parc Bangwréogo.';
    this.cardbutton1 = 'En savoir Plus';

    this.cardimage2 = '../../assets/images/image13.jpg';
    this.cardsurtitre2 = 'Projet Bien-être psychosocial';
    this.cardtitre2 = 'Les enfants initié à l apprentissage d un métier';
    this.carddescription2 = 'Hope&Charity a procédé, ce vendredi 21 juillet au lancement du projet Bien-être psychosocial. Ce projet se donne pour objectif de former 250 enfats déscolarisés à l apprentissage d un métier';
    this.cardbutton2 = 'En savoir Plus';

    this.cardimage3 = '../../../assets/images/image15.jpg';
    this.cardsurtitre3 = 'Education';
    this.cardtitre3 = 'Des cours d appui pour les enfants en difficultés';
    this.carddescription3 = 'Au-delà de la simple scolarisation des enfants, Hope&Charity organise des cours d appui au profit des enfants en difficulté. Les 1eres séances ont eu lieu ce jeudi';
    this.cardbutton3 = 'En savoir Plus';

    this.cardimage4 = '../../../assets/images/image14.jpg';
    this.cardsurtitre4 = 'Droits des femmes';
    this.cardtitre4 = 'Une marche pour dire non aux VBG';
    this.carddescription4 = 'Dans le cadre de son projet STOP VBG, Hope&Charity a organisé une marche de protestation contre les violences à l égard des femmes.';
    this.cardbutton4 = 'En savoir Plus';
  }

}
