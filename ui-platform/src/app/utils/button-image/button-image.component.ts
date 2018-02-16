import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'button-image',
  templateUrl: './button-image.component.html',
  styleUrls: ['./button-image.component.css']
})
export class ButtonImageComponent {
  @Input() route: string;
  @Input() srcUrl: string;
  @Input() buttonText: string;
  @Output() buttonClicked = new EventEmitter();

  constructor() { }

  onClick() {
    this.buttonClicked.emit();
  }

}
