import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  isFlipped = false;

  // Function to flip the card
  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
