import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-section-one',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.scss'
})
export class SectionOneComponent {
  constructor(private e1: ElementRef, private renderer: Renderer2, private router: Router, private sharedService: SharedService) { }

  q1 = `Do you think application security is considered one of the developer's responsibilities in SDLC? `;
  q2 = `At which stages in the Software Development Life Cycle (SDLC) should security measures be applied?`;
  q3 = `Which of the following are True?`;
  q4 = `Is it acceptable to consider security as a trade-off between cost and benefit?`;
  q5 = `Is it appropriate for developers to address security concerns solely in response to a security incident?`;

  isButtonDisabled: boolean = false;
  isAllAnswersCorrect: boolean = true;
  section1Guidelines: string[] = [];

  correctAnswers = {
    q1: 'a',
    q2: 'e',
    q3: 'c',
    q4: 'b',
    q5: 'b'
  };

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
  }

  selectedQ1: string = '';
  selectedQ2: string = '';
  selectedQ3: string = '';
  selectedQ4: string = '';
  selectedQ5: string = '';
  section1Score: number = 0;

  isQ1Correct: boolean = true;
  isQ2Correct: boolean = true;
  isQ3Correct: boolean = true;
  isQ4Correct: boolean = true;
  isQ5Correct: boolean = true;

  validateForm(event: Event) {
    event.preventDefault();
    this.isButtonDisabled = true;
    this.isAllAnswersCorrect = false;
    this.sharedService.section1Score = 0;
    this.sharedService.section1Guidelines = [];


    this.isQ1Correct = this.selectedQ1.toLowerCase() === this.correctAnswers.q1.toLowerCase();
    this.isQ2Correct = this.selectedQ2.toLowerCase() === this.correctAnswers.q2.toLowerCase();
    this.isQ3Correct = this.selectedQ3.toLowerCase() === this.correctAnswers.q3.toLowerCase();
    this.isQ4Correct = this.selectedQ4.toLowerCase() === this.correctAnswers.q4.toLowerCase();
    this.isQ5Correct = this.selectedQ5.toLowerCase() === this.correctAnswers.q5.toLowerCase();

    if (this.isQ1Correct) {
      this.sharedService.section1Score += this.score.q1;
    } else {
      this.sharedService.section1Guidelines.push(this.guideLines.q1);
    }

    if (this.isQ2Correct) {
      this.sharedService.section1Score += this.score.q2;
    } else {
      this.sharedService.section1Guidelines.push(this.guideLines.q2);
    }

    if (this.isQ3Correct) {
      this.sharedService.section1Score += this.score.q3;
    } else {
      this.sharedService.section1Guidelines.push(this.guideLines.q3);
    }

    if (this.isQ4Correct) {
      this.sharedService.section1Score += this.score.q4;
    } else {
      this.sharedService.section1Guidelines.push(this.guideLines.q4);
    }

    if (this.isQ5Correct) {
      this.sharedService.section1Score += this.score.q5;
    } else {
      this.sharedService.section1Guidelines.push(this.guideLines.q5);
    }
    this.section1Guidelines = this.sharedService.section1Guidelines;

    this.section1Score = this.sharedService.section1Score;
  }
}
