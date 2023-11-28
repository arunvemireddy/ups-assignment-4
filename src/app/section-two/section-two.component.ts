import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-section-two',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './section-two.component.html',
  styleUrl: './section-two.component.scss'
})
export class SectionTwoComponent {

  constructor(private router: Router, private sharedService: SharedService) { }

  isButtonDisabled: boolean = false;
  isAllAnswersCorrect: boolean = true;
  section2Guidelines: string[] = [];

  q1 = `When developing software, security vulnerabilities such as buffer overflow and memory leaks can pose significant risks. 
  Consider the strcpy function in the C programming language, which is known for its potential to cause buffer overflows. As a software developer, should you`;
  q2 = `To what extent do developers trust the security of library APIs during development?`;
  q3 = `In software development, some developers hesitate to update code or migrate to newer libraries, fearing potential disruptions to existing functionality. It's important to consider that`;
  q4 = `Why is input validation important in software development`;
  q5 = `According to the best practices, why is it recommended to aim for simple designs in terms of security`;

  correctAnsQ1 = 'c';
  correctAnsQ2 = 'e';
  correctAnsQ3 = 'b';
  correctAnsQ4 = 'no';
  correctAnsQ5 = 'no';

  score = {
    q1: 10,
    q2: 10,
    q3: 10,
    q4: 10,
    q5: 10,
  };

  result = {
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0
  };

  guideLines = {
    q1: `Correct Answer: C \t  Although functionality is important, security vulnerabilities like buffer overflows and memory leaks can pose significant risks. 
    It's crucial for developers to actively address and mitigate security concerns during the development process, including using safer alternatives to functions like strcpy. 
    Relying solely on dedicated security teams during testing may increase the likelihood of overlooking critical vulnerabilities. `,

    q2: `Correct Answer: E \t Trusting library APIs is common, it's essential to adopt a cautious approach to ensure the security of your software. 
    Developers often rigorously assess and validate the security aspects of library APIs before integrating them into their projects. 
    This proactive stance helps identify and address potential vulnerabilities. 
    It's advisable to be vigilant about the security of the libraries you use to enhance the overall security of your application.`,

    q3: `Correct Answer: B \t While stability is important, it's also crucial to recognize the significance of security in software development. 
    Prioritizing stability should go hand in hand with considering updates, especially those addressing known vulnerabilities. 
    Balancing these factors ensures your software remains stable while also being resilient against potential security threats.`,

    q4: 'yes',
    q5: 'yes5'
  }

  selectedQ1: string = '';
  selectedQ2: string = '';
  selectedQ3: string = '';
  selectedQ4: string = '';
  selectedQ5: string = '';
  section2Score: number = 0;

  isQ1Correct: boolean = true;
  isQ2Correct: boolean = true;
  isQ3Correct: boolean = true;
  isQ4Correct: boolean = true;
  isQ5Correct: boolean = true;

  validateForm(event: Event) {
    event.preventDefault();
    this.isButtonDisabled = true;
    this.isAllAnswersCorrect = false;
    this.sharedService.section2Score = 0;
    this.sharedService.section2Guidelines = [];

    this.isQ1Correct = this.selectedQ1.toLowerCase() === this.correctAnsQ1.toLowerCase();
    this.isQ2Correct = this.selectedQ2.toLowerCase() === this.correctAnsQ2.toLowerCase();
    this.isQ3Correct = this.selectedQ3.toLowerCase() === this.correctAnsQ3.toLowerCase();
    this.isQ4Correct = this.selectedQ4.toLowerCase() === this.correctAnsQ4.toLowerCase();
    this.isQ5Correct = this.selectedQ5.toLowerCase() === this.correctAnsQ5.toLowerCase();

    if (this.isQ1Correct) {
      this.sharedService.section2Score += this.score.q1;
      this.result.q1 = this.score.q1;
    } else {
      this.sharedService.section2Guidelines.push(this.guideLines.q1);
    }

    if (this.isQ2Correct) {
      this.sharedService.section2Score += this.score.q2;
      this.result.q2 = this.score.q2;
    } else {
      this.sharedService.section2Guidelines.push(this.guideLines.q2);
    }

    if (this.isQ3Correct) {
      this.sharedService.section2Score += this.score.q3;
      this.result.q3 = this.score.q3;
    } else {
      this.sharedService.section2Guidelines.push(this.guideLines.q3);
    }

    if (this.isQ4Correct) {
      this.sharedService.section2Score += this.score.q4;
      this.result.q4 = this.score.q4;
    } else {
      // this.sharedService.section2Guidelines.push(this.guideLines.q4);
    }

    if (this.isQ5Correct) {
      this.sharedService.section2Score += this.score.q5;
      this.result.q5 = this.score.q5;
    } else {
      // this.sharedService.section2Guidelines.push(this.guideLines.q5);
    }

    this.section2Score = this.sharedService.section2Score;
    this.section2Guidelines = this.sharedService.section2Guidelines;
  }
}
