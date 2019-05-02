import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';


@Component({
  selector: 'price-weight',
  templateUrl: './price-weight.component.html',
  styleUrls: ['./price-weight.component.scss']
})
export class PriceWeightComponent {

  @Input() price;
  @Input() weight;
  @Output() onOrder = new EventEmitter();

  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  onClicked = () => {
    this.onOrder.emit();
  }

}
