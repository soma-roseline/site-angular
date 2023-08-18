import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contacttitle! : string
  contactdescription! : string

  adressetitle1! : string
  adresse1! : string
  adressetitle2! : string
  adresse2! : string
  horaire! : string
  heure! : string

  formname! : string
  formmail! : string
  formsujet! : string
  formcommentaire! : string
  formbutton!: string


  ngOnInit() {
    this.contacttitle = 'ENTRER EN CONTACT';
    this.contactdescription = 'Vous pouvez nous contactez en nous rejoignant dans nos locaux sis aux adresses ci-dessous ou en nous laissant un message via le formulaire ci-contre.';

    this.adressetitle1 = 'Adresse du bureau 1 :';
    this.adresse1 = '4461, AV Babanguida , AR 72368';
    this.adressetitle2 = 'Adresse du bureau 2 :';
    this.adresse2 = '2467 AV Kwamé NKrumah Ouagadougou, région du Centre';
    this.horaire = 'Heures d ouverture:';
    this.heure = '9h00 à 18h00';
    this.formbutton ='Envoyer le message';
  } 

}
