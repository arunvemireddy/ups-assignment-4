import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-section-two',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './section-two.component.html',
  styleUrl: './section-two.component.scss'
})
export class SectionTwoComponent {
  q1 = `1. When developing software, security vulnerabilities such as buffer overflow and memory leaks can pose significant risks. 
  Consider the strcpy function in the C programming language, which is known for its potential to cause buffer overflows. As a software developer, should you`;
  q2 = `2. To what extent do developers trust the security of library APIs during development?`;
  q3 = `3. In software development, some developers hesitate to update code or migrate to newer libraries, fearing potential disruptions to existing functionality. It's important to consider that`; 
  q4 = `4. Is it acceptable to consider security as a trade-off between cost and benefit?`;
  q5 = `5. Is it appropriate for developers to address security concerns solely in response to a security incident?`;

  guideLinesQ1 = "yes";
  guideLinesQ2 = "guideLines Q2";
  guideLinesQ3 = "guideLines Q3";
  guideLinesQ4 = "guideLines Q4";
  guideLinesQ5 = "guideLines Q5";

  correctAnsQ1 = 'c';
  correctAnsQ2 = 'd';
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
