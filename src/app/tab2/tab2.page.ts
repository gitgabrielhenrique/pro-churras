import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
valendo=1
placart1=0
placart2=0

  constructor() {}

 mudarpeso(cont:number){
this.valendo=cont;


 }


 somarplacart1(){
this.placart1+=this.valendo

 }

 diminuir_placart1(){
this.placart1-=this.valendo

 }

 somarplacart2(){
  this.placart2+=this.valendo

   }

   diminuir_placart2(){
  this.placart2-=this.valendo

   }


}
