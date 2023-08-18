import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  domaineparagraphe! : string
  cardtext1! : string
  cardtext2! : string
  cardtext3! : string

  cardtitle1! : string
  cardtitle2! : string
  cardtitle3! : string

  imagecard1! : string
  imagecard2! : string
  imagecard3! : string

  cardbutton! : string

  caracteristiquetitle!: string
  caracteristiquedescriptif! : string
  listitem1!: string
  listitem2!: string
  listitem3!: string
  listitem4!: string

  caracteristiquetitle2! : string
  caracteristiquedescriptif2! : string
  button! : string
  button2! : string



  ngOnInit(): void {
    
  this.domaineparagraphe ='Pour répondre aux besoins des populations Hope$Charity développe son expertise d années en années. Nous intervenons dans 3 principaux domaines';
  this.imagecard1 = 'https://themewagon.github.io/chariteam/img/icon-1.png';
  this.imagecard2 = 'https://themewagon.github.io/chariteam/img/icon-2.png';
  this.imagecard3 = 'https://themewagon.github.io/chariteam/img/icon-3.png';
  this.cardtext1 = 'Nous nous engageons en faveur du droit à une éducation de qualité pour tous les enfants. Notre association s occupe des enfants et des jeunes, en particulier les filles.';
  this.cardtext2 = 'Nous appuyons l offre de soins de santé primaire et secondaire des centres de santé. Nous mettons en place un système de renforcement des compétences locales à travers des formations';
  this.cardtext3 = 'Nous aidons les populations à avoir accès à l eau potable car près de 2.2 milliards de personnes n ont pas accès à des services d eau';
  this.cardtitle1 = 'EDUCATION';
  this.cardtitle2 = 'SOINS DE SANTE';
  this.cardtitle3 = 'EAU';
  this.cardbutton = 'Apprendre plus';

  this.caracteristiquetitle = 'Nous millitons pour le respect des droits fondamentaux en menant des actions prioritaires';
  this.caracteristiquedescriptif = 'Notre société est confrontée à des problèmes particulièrement préoccupants dans certains domaines qui sont de ce fait prioritaires où l action s impose d urgence. Nous prenons des mesures dans les domaines prioritaires suivants';
  this.listitem1 ='Promotion et protection des droits fondamentaux par l application des textes de lois';
  this.listitem2 ='Parrainage d enfant et octroi de bourses';
  this.listitem3 ='Prise en charge médicale des personnes vulnérables';
  this.listitem4 ='Construction de forage';
  this.caracteristiquetitle2 ='Contribuez à  faire changer les choses maintenant';
  this.caracteristiquedescriptif2 = 'Le changement est possible avec l engagement et le soutien de tous. Faites un don afin de soutenir nos projets'
  this.button = 'Faire un don';
  this.button2 = 'Voir nos projets';

  } 

}
