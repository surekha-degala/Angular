import { Component } from '@angular/core';
import { Child } from '../child/child';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [Child,FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
  
  msgfromChild = "";
  myNameInParent = "";

  receiver(e : string) {
    this.msgfromChild = e;
  }
}
