import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'card-quick-access',
  templateUrl: './card-quick-access.component.html',
  styleUrls: ['./card-quick-access.component.css']
})
export class CardQuickAccessComponent {
  @Input() title: string;
  @Input() alias: string;
  @Input() description: string;
  @Input() cssClassAvatar: string;
  @Input() buttonText: string;
  @Output() buttonClicked = new EventEmitter();

  onClick() {
    if (this.alias === undefined) {
      this.alias = '';
    }

    this.buttonClicked.emit(this.alias);
  }

}
