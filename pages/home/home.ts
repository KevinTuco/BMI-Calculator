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
  hordeHit: number;
  fightResult: string;

  minionHorde() {
    this.bmi = this.weight / (this.height * this.height);
    this.bmi = parseFloat(this.bmi.toFixed(2));

    if (this.bmi < 18.5){
      this.bmiMessage = "Underweight";
    } else if (this.bmi > 18.5 && this.bmi <25){
      this.bmiMessage = "Normal";
    } else if (this.bmi >25 && this.bmi < 30){
      this.bmiMessage = "Overweight";
    } else{
      this.bmiMessage = "Obese";
    }
  }
  
   calculateIWC() {
    this.subtract = 5*12;
    this.feetConvert = parseInt(this.feetHeight)*12;
    switch(this.gender){
      case "m":
        if ((parseInt(this.feetHeight)<5)){
          this.tooLow = "The calculations are only accurate for those who are at least 5 ft tall.";
        }else if ((parseInt(this.feetHeight)>7)){
          this.tooLow = "Are you sure? The tallest person in the world, Robert Wadlow, is 8 feet and 11.1 inches";
        }else{
            this.calcNum =parseInt(this.inchesHeight) + (this.feetConvert - this.subtract) ;
            //Miller formula: 56.2 kg + 1.41 kg per every inch over 5 feet
            this.resultMiller = 56.2 + (1.41 * this.calcNum);
            this.resultMiller = parseFloat(this.resultMiller.toFixed(2));
            // Robinson formula: 52 kg + 1.9 kg per every inch over 5 feet
            this.resultRobinson = 52 + (1.9 * this.calcNum);
            this.resultRobinson = parseFloat(this.resultRobinson.toFixed(2));
            //Devine formula: 50.0 kg + 2.3 kg per every inch over 5 feet
            this.resultDevine = 50.0 + (2.3 * this.calcNum);
            this.resultDevine = parseFloat(this.resultDevine.toFixed(2));
            // Hamwi formula: 48.0 kg + 2.7 kg per every inch over 5 feet
            this.resultHamwi = 48.0 + (2.7 * this.calcNum);
            this.resultHamwi = parseFloat(this.resultHamwi.toFixed(2));
            this.tooLow = ``;
        }
        break;
      case "f":
        if ((parseInt(this.feetHeight)<5)){
          this.tooLow = "The calculations are only accurate for those who are at least 5 ft tall.";
        }else if ((parseInt(this.feetHeight)>7)){
          this.tooLow = "Are you sure? The tallest person in the world, Robert Wadlow, is 8 feet and 11.1 inches";
        }else{
          this.calcNum =parseInt(this.inchesHeight) + (this.feetConvert - this.subtract) ;
          //Miller formula: 53.1 kg + 1.36 kg per every inch over 5 feet
          this.resultMiller = 53.1 + (1.36 * this.calcNum);
          this.resultMiller = parseFloat(this.resultMiller.toFixed(2));
          // Robinson formula: 49 kg + 1.7 kg per every inch over 5 feet
          this.resultRobinson = 49.0 + (1.7 * this.calcNum);
          this.resultRobinson = parseFloat(this.resultRobinson.toFixed(2));
          //Devine formula: 45.5 kg + 2.3 kg per every inch over 5 feet
          this.resultDevine = 45.5 + (2.3 * this.calcNum);
          this.resultDevine = parseFloat(this.resultDevine.toFixed(2));
          //Hamwi formula: 45.5 kg + 2.2 kg per every inch over 5 feet
          this.resultHamwi = 45.5 + (2.2 * this.calcNum);
          this.resultHamwi = parseFloat(this.resultHamwi.toFixed(2));
          this.tooLow = ``;
        }
        break;
    }
  }
  
  constructor(public navCtrl: NavController) {

  }

}
