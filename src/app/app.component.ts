import { Component, OnInit } from '@angular/core';
import {Aluno, Nota} from "src/assets/exercicio10"



@Component({
  selector: 'exp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent extends Aluno implements OnInit {
 
  title = 'exercicio10';

  media: number = 0;
  override passou: boolean = false;
  situacao:string ="";
   
 constructor(){
   super("",0)
 }
 
  ngOnInit(): void {
    let aluno1:Aluno = new Aluno("Jonas", 7);
    let notas:Nota[] = [
      {
         cadeira:"Geografia",
         ponto: 4,
         aluno: aluno1
      },
      {
        cadeira:"Geografia",
        ponto: 8,
        aluno: aluno1
     },
     {
      cadeira:"Geografia",
      ponto: 3,
      aluno: aluno1
   },
   {
    cadeira:"Geografia",
    ponto: 10,
    aluno: aluno1
 },
    ];
    
    let total = notas.reduce((soma, item) => soma + item.ponto, 0);
    this.media = total / notas.length;
   
    this.passou = this.aprovado(this.media)

    if(this.passou){
      this.situacao ="Aprovado"
    }else{
      this.situacao ="Reprovado"
    }
 }
}

