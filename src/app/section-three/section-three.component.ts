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

  correctAnsQ1 = 'a';
  correctAnsQ2 = 'b';
  correctAnsQ3 = 'c';


  q1 = `Is it advisable to use a self-signed OpenSSL certificate for a public website`;
  q2 = `Is it considered acceptable for developers to use deprecated functions in their code`;
  q3 = `What developers should do when obtaining code solutions from community platforms for implementing cryptographic APIs such as Stack Overflow`;


  isButtonDisabled: boolean = false;
  section3Guidelines: string[] = [];
  isAllAnswersCorrect: boolean = true;

  score = {
    q1: 10,
    q2: 10,
    q3: 10,
   
  };

  guideLines = {
    q1: `Correct Answer: A \t it's possible to use a self-signed OpenSSL certificate, it's essential to be aware that web browsers do not automatically trust self-signed certificates. 
    This may result in warning messages for users visiting the website. To ensure a smoother user experience and establish trust, especially for public-facing websites, 
    it's advisable to obtain a certificate from a trusted certificate authority. 
    This helps prevent potential security concerns and ensures that users can access your website without encountering browser warnings. `,

    q2: `Correct Answer: B \t Deprecated functions may be outdated and could contain security vulnerabilities that have been identified and addressed in newer alternatives. 
    Using deprecated functions may expose your code to potential security risks`,

    q3: `Correct Answer: C \t Thoroughly analyzing code solutions obtained from community platforms is crucial to ensure the security and integrity of your project. 
    While community platforms like Stack Overflow can be valuable for getting insights, blindly trusting code without verification may introduce security vulnerabilities. 
    Cryptographic implementations demand precision, and overlooking potential vulnerabilities even they are provided by experienced developers could lead to serious security risks.`
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

    

    this.section3Guidelines = this.sharedService.section3Guidelines;
    this.section3Score = this.sharedService.section3Score;
  }
}
