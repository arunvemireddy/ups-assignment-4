import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-section-three',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './section-three.component.html',
  styleUrl: './section-three.component.scss'
})
export class SectionThreeComponent {
  constructor(private router: Router, private sharedService: SharedService) { }

  q1 = `1. Do you think application security is considered one of the developer's responsibilities in SDLC? `;
  q2 = `2. At which stages in the Software Development Life Cycle (SDLC) should security measures be applied?`;
  q3 = `3. Which of the following are True?`;
  q4 = `4. Is it acceptable to consider security as a trade-off between cost and benefit?`;
  q5 = `5. Is it appropriate for developers to address security concerns solely in response to a security incident?`;
  isButtonDisabled: boolean = false;
  section3Guidelines: string[] = [];
  isAllAnswersCorrect: boolean = true;

  guideLinesQ1 = "yes";
  guideLinesQ2 = "guideLines Q2";
  guideLinesQ3 = "guideLines Q3";
  guideLinesQ4 = "guideLines Q4";
  guideLinesQ5 = "guideLines Q5";

  correctAnsQ1 = 'yes';
  correctAnsQ2 = 'e';
  correctAnsQ3 = 'c';
  correctAnsQ4 = 'no';
  correctAnsQ5 = 'no';

  score = {
    q1: 10,
    q2: 10,
    q3: 10,
    q4: 10,
    q5: 10
  };

  guideLines = {
    q1: 'yes1',
    q2: 'yes2',
    q3: 'yes',
    q4: 'yes',
    q5: 'yes5'
  };

  result = {
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0
  };

  selectedQ1: string = '';
  selectedQ2: string = '';
  selectedQ3: string = '';
  selectedQ4: string = '';
  selectedQ5: string = '';
  section3Score: number = 0;

  isQ1Correct: boolean = true;
  isQ2Correct: boolean = true;
  isQ3Correct: boolean = true;
  isQ4Correct: boolean = true;
  isQ5Correct: boolean = true;

  validateForm(event: Event) {
    event.preventDefault();
    this.isButtonDisabled = true;
    this.sharedService.section3Score = 0;
    this.sharedService.section3Guidelines = [];
    this.isAllAnswersCorrect = false;

    this.isQ1Correct = this.selectedQ1.toLowerCase() === this.correctAnsQ1.toLowerCase();
    this.isQ2Correct = this.selectedQ2.toLowerCase() === this.correctAnsQ2.toLowerCase();
    this.isQ3Correct = this.selectedQ3.toLowerCase() === this.correctAnsQ3.toLowerCase();
    this.isQ4Correct = this.selectedQ4.toLowerCase() === this.correctAnsQ4.toLowerCase();
    this.isQ5Correct = this.selectedQ5.toLowerCase() === this.correctAnsQ5.toLowerCase();

    if (this.isQ1Correct) {
      this.sharedService.section3Score += this.score.q1;
      this.result.q1 = this.score.q1;
    } else {
      this.sharedService.section3Guidelines.push(this.guideLines.q1);
    }

    if (this.isQ2Correct) {
      this.sharedService.section3Score += this.score.q2;
      this.result.q2 = this.score.q2;
    } else {
      this.sharedService.section3Guidelines.push(this.guideLines.q2);
    }

    if (this.isQ3Correct) {
      this.sharedService.section3Score += this.score.q3;
      this.result.q3 = this.score.q3;
    } else {
      this.sharedService.section3Guidelines.push(this.guideLines.q3);
    }

    if (this.isQ4Correct) {
      this.sharedService.section3Score += this.score.q4;
      this.result.q4 = this.score.q4;
    } else {
      this.sharedService.section3Guidelines.push(this.guideLines.q4);
    }

    if (this.isQ5Correct) {
      this.sharedService.section3Score += this.score.q5;
      this.result.q5 = this.score.q5;
    } else {
      this.sharedService.section3Guidelines.push(this.guideLines.q5);
    }

    this.section3Guidelines = this.sharedService.section3Guidelines;
    this.section3Score = this.sharedService.section3Score;
  }
}
