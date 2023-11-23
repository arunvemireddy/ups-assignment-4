import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  sectionOneScore:number=0;
  sectionTwoScore:number=0;
  sectionThreeScore:number=0;
  finalScore:number=0;


  getFinalScore(){
    this.finalScore = this.sectionOneScore+this.sectionTwoScore+this.sectionThreeScore;
  }
}
