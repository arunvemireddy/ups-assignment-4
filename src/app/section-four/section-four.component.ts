import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';
import { Router } from 'express';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-section-four',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './section-four.component.html',
  styleUrl: './section-four.component.scss'
})
export class SectionFourComponent {
  constructor( private sharedService: SharedService) { }

  q1 = `Is the responsibility for security vulnerabilities solely on individual developers, or is there a need to consider company hierarchies and implement new practices?`;
  q2 = `How does company culture influence developers' consideration of security?`;
  q3 = `How can external pressure, such as mandates from overseeing entities, influence teams' adoption of security practices?`;
  q4 = `When developers use functions like setDate(), 
  which sets the server date, do they need to be concerned about security vulnerabilities like “Format string injection attacks”, “SQL Injection Attacks`;
  q5 = `What is an API security blindspot`;

  isButtonDisabled: boolean = false;
  isAllAnswersCorrect: boolean = true;
  section4Guidelines: string[] = [];

  correctAnswers = {
    q1: 'b',
    q2: 'b',
    q3: 'b',
    q4: 'a',
    q5: 'b'
  };

  score = {
    q1: 2,
    q2: 5,
    q3: 4,
    q4: 5,
    q5: 4
  };

  result = {
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0
  };

  guideLines = {
    q1: `1. Correct Answer: B \t Responsibility for security vulnerabilities extends beyond individual developers, involving company hierarchies. 
    Acknowledging broader perspective allows for the implementation of new, realistic best practices that can address the complexities and pressures of 
    development without solely blaming individual developers.`,

    q2: `2. Correct Answer: B \t While all stages of the Software Development Life Cycle (SDLC) are important for application security, it's crucial to recognize that security measures should be applied throughout the entire process. 
          This includes during design and implementation, in developer testing, through code testing and code review, as well as in post-development testing. 
          Ensuring security across all stages helps create a robust and resilient application. `,

    q3: `3. Correct Answer: B \t Developers may prioritize feature-driven testing, it's essential to recognize that security is also a priority during developer testing. 
          Developers play a crucial role in incorporating security measures during the testing phase to identify and address potential vulnerabilities.`,

    q4: `4. Correct Answer: A \t SQL injection is a significant threat that can lead to unauthorized access and data manipulation. 
    Format string injection attacks can be a concern, especially when dealing with dynamic command execution. 
    Developers should always validate and sanitize user inputs, use parameterized queries, or employ prepared statements to prevent SQL injection attacks. `,
          
    q5: `5. Correct Answer: B \t  An API security blindspot is not a deliberate security measure or vulnerability. 
    It's a misconception or oversight by developers when using an API function. 
    Recognizing and addressing these blindspots is vital for enhanced security awareness in software development.`
  }

  selectedQ1: string = '';
  selectedQ2: string = '';
  selectedQ3: string = '';
  selectedQ4: string = '';
  selectedQ5: string = '';
  section4Score: number = 0;

  isQ1Correct: boolean = true;
  isQ2Correct: boolean = true;
  isQ3Correct: boolean = true;
  isQ4Correct: boolean = true;
  isQ5Correct: boolean = true;

  validateForm(event: Event) {
    event.preventDefault();
    this.isButtonDisabled = true;
    this.isAllAnswersCorrect = false;
    this.sharedService.section4Score = 0;
    this.sharedService.section4Guidelines = [];

    this.isQ1Correct = this.selectedQ1.toLowerCase() === this.correctAnswers.q1.toLowerCase();
    this.isQ2Correct = this.selectedQ2.toLowerCase() === this.correctAnswers.q2.toLowerCase();
    this.isQ3Correct = this.selectedQ3.toLowerCase() === this.correctAnswers.q3.toLowerCase();
    this.isQ4Correct = this.selectedQ4.toLowerCase() === this.correctAnswers.q4.toLowerCase();
    this.isQ5Correct = this.selectedQ5.toLowerCase() === this.correctAnswers.q5.toLowerCase();

    if (this.isQ1Correct) {
      this.sharedService.section4Score += this.score.q1;
      this.result.q1 = this.score.q1;
    } else {
      this.sharedService.section4Guidelines.push(this.guideLines.q1);
    }

    if (this.isQ2Correct) {
      this.sharedService.section4Score += this.score.q2;
      this.result.q2 = this.score.q2;
    } else {
      this.sharedService.section4Guidelines.push(this.guideLines.q2);
    }

    if (this.isQ3Correct) {
      this.sharedService.section4Score += this.score.q3;
      this.result.q3 = this.score.q3;
    } else {
      this.sharedService.section4Guidelines.push(this.guideLines.q3);
    }

    if (this.isQ4Correct) {
      this.sharedService.section4Score += this.score.q4;
      this.result.q4 = this.score.q4;
    } else {
      this.sharedService.section4Guidelines.push(this.guideLines.q4);
    }

    if (this.isQ5Correct) {
      this.sharedService.section4Score += this.score.q5;
      this.result.q5 = this.score.q5;
    } else {
      this.sharedService.section4Guidelines.push(this.guideLines.q5);
    }

    this.section4Guidelines = this.sharedService.section4Guidelines;
    this.section4Score = this.sharedService.section4Score;
  }
}
