import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'app';
  onClick(input: HTMLInputElement, channel : HTMLParagraphElement) {
    console.log(input);
    console.log(channel.innerHTML);
  }
}
