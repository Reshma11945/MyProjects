import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valentine-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valentine-card.component.html',
  styleUrls: ['./valentine-card.component.scss']
})
export class ValentineCardComponent {
  yesButtonSize = 100; // Both buttons same size initially
  noButtonPosition = { top: 50, left: 50 }; // This won't be used until absolute
  noButtonVisible = true;
  noIsAbsolute = false; // KEY: Start as false (buttons side-by-side)
  showConfetti = false;
  showCelebration = false;
  attempts = 0;

  // Move the "No" button away when mouse gets near it
  onNoButtonHover(event: MouseEvent) {
    if (!this.noButtonVisible) return;
    
    this.attempts++;
    
    // FIRST TIME: Make it absolute so it can move around
    if (!this.noIsAbsolute) {
      this.noIsAbsolute = true;
    }
    
    // Increase "Yes" button size with each attempt
    this.yesButtonSize = Math.min(200, 100 + (this.attempts * 15));
    
    // Generate random position away from center
    const newTop = Math.random() * 60 + 10;  // 10-70%
    const newLeft = Math.random() * 60 + 10; // 10-70%
    
    this.noButtonPosition = {
      top: newTop,
      left: newLeft
    };
    
    // After 4 attempts, hide "No" button behind "Yes"
    if (this.attempts >= 4) {
      this.noButtonVisible = false;
    }
  }

  // Handle "Yes" button click
  onYesClick() {
    this.showCelebration = true;
    this.showConfetti = true;
  }

  // Handle "No" button click attempt
  onNoClick(event: MouseEvent) {
    event.preventDefault();
    this.onNoButtonHover(event);
  }
}