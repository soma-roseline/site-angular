import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit{
  paragraphe!:string
  name1!:string
  fonction1! : string
  name2!:string
  fonction2! : string
  name3!:string
  fonction3! : string
  name4!:string
  fonction4! : string

  processtitle! : string
  processparagraphe! : string
  processcardtitle1! : string
  processcardparagraphe1! : string

  temoignagetitle! : string
  temoignageparagraphe! : string
  temoignagename1! : string
  temoignagename2! : string
  temoignagename3! : string
  temoignagecity1! : string
  temoignagecity2! : string
  temoignagecity3! : string
  temoignagecardparagraphe1! : string
  temoignagecardparagraphe2! : string
  temoignagecardparagraphe3! : string

  starttitle! : string
  startparagraphe! : string



  
  
  ngOnInit(): void {
    
  this.paragraphe = 'En étroite collaboration avec les partenaires et les communautés, nos soldats permettent de développer des programmes qui repondent aux défis du moment.';
  this.name1 = 'Franck Johnson';
  this.fonction1 = 'DIRECTEUR-PAYS';
  this.name2 = 'Elaine Stclair';
  this.fonction2 = 'DIRECTEUR-PAYS ADJOINT';
  this.name3 = 'Wanda Arthur';
  this.fonction3 = 'CHARGE DE PROJET';
  this.name4 = 'Josué Temple';
  this.fonction4 = 'CHARGE DE COMMUNICATION';

  this.processtitle  = 'WORK PROCESS'
  this.processparagraphe = 'Agir sur le terrain ne s improvise pas. Hope&Charity privilégie l engagement à toutes épreuves';
  this.processcardtitle1 = 'Comment nous vous aidons';
  this.processcardparagraphe1 = 'S engager avec Hope&Charity, c est travailler mains dans la main au sein d equipes motivées  dans un contexte souvent difficile. Cest intégrer une ONG où votre voix compte et votre action impacte la vie des autres';
  

  this.temoignagetitle = 'CE QU ILS ONT DIT';
  this.temoignageparagraphe = 'Découvrez les temoignages de ces personnes qui se sont soit engagées en rejoignant notre équipe ou soit en collaborant sur des projets de Hope&Charity';
  this.temoignagecardparagraphe1 = '"Le travail que nous faisons au sein de Hope&Charity a un vrai sens. Celui de contribuer à changer les choses en protégeant les droits des personnes vulnérables. C est ma source d inspirationLe travail que nous faisons au sein de Hope&Charity a un vrai sens. Celui de contribuer à changer les choses en protégeant les droits des personnes vulnérables. C est ma source d inspiration'; 
  this.temoignagecardparagraphe2 = '"Travailler pour Hope, c est souvent voir au quotidien la souffrance, la pauvreté et ce n est pas facile de vivre de telles situations. Mais je suis reconfortée par le fait que mes actions contribuent à améliorer la vie des autres"';
  this.temoignagecardparagraphe3 = '"Je me suis engagée en tant que bénévole car j ai été convaincue par la demarche de développement et les valeurs prônées par Hope&Charity"';
  this.temoignagename1 = 'RUBEN REED - ';
  this.temoignagecity1 ='Charleston';
  this.temoignagename2 = 'MICHAEL P. HOWLETT - ';
  this.temoignagecity2 = 'Worcester';
  this.temoignagename3 = 'THERESA D. SINCLAIR - ';
  this.temoignagecity3 = 'Lynchburg';

  this.starttitle = 'Nous rejoindre'
  this.startparagraphe = 'Vous avez envie de faire carrière chez Hope&Charity? Nos interventions, projets et campagnes changent de nombreuses vies. De nombreuses personnes ont dejà mis leur talent au service de notre action. A votre tour.';

}

}
