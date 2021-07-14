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
  showRoll: number;

  minionHorde() {
        this.minionDam = 0;
        this.hordeHit = this.numMinion;
        this.showNum = this.numMinion;
        this.showRoll = this.minionDNum;
        while(this.numMinion > 0){
          this.roll = Math.floor(Math.random() * 20) + 1;
          if (this.roll == this.AC || this.roll > this.AC){
            while(this.minionDNum > 0){
              this.rollTemp = Math.floor(Math.random() * this.minionDice) + 1;
              this.minionDam += this.rollTemp;
              this.minionDNum --;
            }
          }else if(this.roll < this.AC){
            this.hordeHit --;
          }
          this.numMinion--;
        }
  }
  
  constructor(public navCtrl: NavController) {

  }

}
