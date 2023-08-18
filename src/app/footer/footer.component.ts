import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  copyrighttext!: string
  urlimage! : string

  ngOnInit () {
    this.copyrighttext = '2023 © Glory Events - Thèmesbrand';
    this.urlimage = 'http://dorsin.angular.themesbrand.com/assets/images/payment.png'

  }

  cardcontent = [
    {
      cardtitle: 'HOPE&CHARITY',
      list1 : 'Accueil',
      list2 : 'A propos de nous',
      list3 : 'Carrières',
      list4 : 'Nous contacter',
    },

    {
      cardtitle: 'Information',
      list1 : 'Parrainer un enfant',
      list2 : 'A propos de nous',
      list3 : 'Emplois',
      list4 : 'Bookmark',
    },

    {
      cardtitle: 'Support',
      list1 : 'FAQ',
      list2 : 'Contact',
      list3 : 'Discussion',
      
    },

    {
      cardtitle: 'Newsletter',
      list1 : 'Inscrivez-vous en quelques clics à notre newsletter et recevez mensuellement toutes les nouvelles relatives aux projets et actions de Hope&Charity.',
      button : 'Envoyer nous',
      
    },
  ];

  getAllcardcontent () {
    return this.cardcontent;
  }

}
