import { asNativeElements, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

ngOnInit(): void {
    this.inputRef.nativeElement.focus();
}

  @ViewChild('takinginput', {static: false}) inputRef!: ElementRef<HTMLInputElement>;
  ngAfterViewInit() {
    setTimeout(() => {
      if(this.inputRef ?.nativeElement) {
        this.inputRef.nativeElement.focus();
      }});
    }
  protected title = 'app';
  onClick(input: HTMLInputElement, channel : HTMLParagraphElement) {
    console.log(input);
    console.log(channel.innerHTML);
  }
}