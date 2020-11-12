import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo="Alunos";

  public alunos=[
    {id:1,firstName:'Martha',lastName:'Kent',Phone:123456},
    {id:2,firstName:'Laura',lastName:'Isabella',Phone:234567},
    {id:3,firstName:'Ines',lastName:'Antonia',Phone:345678},
    {id:4,firstName:'Lucas',lastName:'Mario',Phone:456781},
    {id:5,firstName:'Pedros',lastName:'Alves',Phone:567890},
    {id:6,firstName:'Sergio',lastName:'Aguila',Phone:678901},

  ];

  constructor() { }

  ngOnInit() {
  }

}
