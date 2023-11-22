import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-section-one',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.scss'
})
export class SectionOneComponent {
  constructor(private e1:ElementRef,private renderer:Renderer2) {}
  q1 = `1. Do you think application security is considered one of the developer's responsibilities in SDLC? `;
  q2 = `2. At which stages in the Software Development Life Cycle (SDLC) should security measures be applied?`;
  q3 = `3. Which of the following are True?`;
  q4 = `4. Is it acceptable to consider security as a trade-off between cost and benefit?`;
  q5 = `5. Is it appropriate for developers to address security concerns solely in response to a security incident?`;

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

  q1Score = 10;
  q2Score = 10;
  q3Score = 10;
  q4Score = 10;
  q5Score = 10;

  selectedQ1: string = '';
  selectedQ2: string = '';
  selectedQ3: string = '';
  selectedQ4: string = '';
  selectedQ5: string = '';

  isQ1Correct:boolean = true;
  isQ2Correct:boolean = true;
  isQ3Correct:boolean = true;
  isQ4Correct:boolean = true;
  isQ5Correct:boolean = true;
  isAllAnswersCorrect:boolean=true;

  validateForm(event: Event) {
    event.preventDefault();

    console.log('Q1:', this.selectedQ1);
    console.log('Q2:', this.selectedQ2);
    console.log('Q3:', this.selectedQ3);
    console.log('Q4:', this.selectedQ4);
    console.log('Q5:', this.selectedQ5);

    this.isQ1Correct = this.selectedQ1.toLowerCase() === this.correctAnsQ1.toLowerCase();
    this.isQ2Correct = this.selectedQ2.toLowerCase() === this.correctAnsQ2.toLowerCase();
    this.isQ3Correct = this.selectedQ3.toLowerCase() === this.correctAnsQ3.toLowerCase();
    this.isQ4Correct = this.selectedQ4.toLowerCase() === this.correctAnsQ4.toLowerCase();
    this.isQ5Correct = this.selectedQ5.toLowerCase() === this.correctAnsQ5.toLowerCase();
    this.isAllAnswersCorrect = false;

    if (!this.isQ1Correct) {
      console.log('Guidelines for Q1:', this.guideLinesQ1);
    }
    if (!this.isQ2Correct) {
      console.log('Guidelines for Q2:', this.guideLinesQ2);
    }
    if (!this.isQ3Correct) {
      console.log('Guidelines for Q3:', this.guideLinesQ3);
    }
    if (!this.isQ4Correct) {
      console.log('Guidelines for Q4:', this.guideLinesQ4);
    }
    if (!this.isQ5Correct) {
      console.log('Guidelines for Q5:', this.guideLinesQ5);
    }

    
    





  }
}
