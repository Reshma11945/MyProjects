import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ValentineCardComponent } from './valentine-card/valentine-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ValentineCardComponent],
  template: `<app-valentine-card></app-valentine-card>`
})
export class App {
  protected readonly title = signal('specialProject');
}
