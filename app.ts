import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'directives';
  isApproved = false;
  numbers = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five'
  ];
  approve (status: boolean) {
    this.isApproved = status;

  }
  luckynumber =0;
}
