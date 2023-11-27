import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, ResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UPS-Assignment4';
  currentSection: string = 'section1';

  showSection(section: string) {
    this.currentSection = section;
  }
}
