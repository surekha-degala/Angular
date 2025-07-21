import { Component, Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @Input()
  name = "suku";
  @Output()
  emitterr = new EventEmitter<string>();

  childToParent (e: any) {
   this.emitterr.emit(e.target.value); 
  }
}
