import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit{

  paragraphe! : string
  paragraphecard1!: string
  paragraphecard2! : string
  paragraphecard3! : string
  
  ngOnInit(): void {
    
  
  this.paragraphe = 'Depuis sa création en 2012, Hope&Charity met en oeuvre une dizaine de projets sur l ensemble du territoire '
  this.paragraphecard1 = 'De nombreux obstacles empêchent les enfants burkinabés d avoir accès à l école. Le système éducatif manque d efficacité avec une insuffisance notable d infrastructures éducatives sûres et inclusives et un manque d enseignants qualifiés. Pour améliorer l accès à l éducation des jeunes burkinabé.e.s, Hope&Charity met en oeuvre le projet scolarisation des enfants ';
  this.paragraphecard2 = 'Ce projet de Hope&Charity vise à créer des espaces pour les enfants afin de leur permettre d apprendre et de se développer, ';
  this.paragraphecard3 = 'Le projet One Health contribue à la mise en oeuvre de l assurance maladie universelle. Il s assure de l effectivité de la gratuité des soins des femmes et des enfants';
}

}
