import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  public titulo='Professores';

  Professores=[
    {id:1,Name:'Lauro',disciplina:'Mathematics'},
    {id:2,Name:'Roberto',disciplina:'Physics'},
    {id:3,Name:'Ronaldo',disciplina:'English'},
    {id:4,Name:'Enzo',disciplina:'spanish'},
    {id:5,Name:'Raoul',disciplina:'Potugues'},
    {id:6,Name:'Estella',disciplina:'Computer'},

  ];

  constructor() { }

  ngOnInit() {
  }

}
