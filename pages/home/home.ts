import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  numMinion: number;
  minionDam: number;
  AC: number;
  rollTemp: number;
  roll: number;
  hordeHit: number;
  minionDice: number;
  minionDNum: number;
  showNum: number;
  dNum: number;
  Nmin: number;
  atkBonus: number;


  minionHorde() {
        this.minionDam = 0;
        this.showNum = this.numMinion;
        this.hordeHit = this.numMinion;
        this.Nmin = this.numMinion;
        while(this.Nmin > 0){
          this.roll = Math.floor(Math.random() * 20) + 1;
          if (this.roll == (this.AC+this.atkBonus) || this.roll > (this.AC+this.atkBonus)){
            this.dNum = this.minionDNum;
            while(this.dNum > 0){
              this.rollTemp = Math.floor(Math.random() * this.minionDice) + 1;
              this.minionDam += this.rollTemp;
              this.dNum --;
            }
          }else if(this.roll < this.AC){
            this.hordeHit --;
          }
          this.Nmin--;
        }
  }
  
  constructor(public navCtrl: NavController) {

  }

}
