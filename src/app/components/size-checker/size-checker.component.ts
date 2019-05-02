import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'size-checker',
  templateUrl: './size-checker.component.html',
  styleUrls: ['./size-checker.component.scss']
})
export class SizeCheckerComponent implements OnInit {

  @Input() pizzaId;
  @Output() onSizeChecked = new EventEmitter();

  sizes;
  selected = 'm';

  constructor(public firestoreService: FirestoreService) {}

  ngOnInit() {
    this.initSizes();
  }

  async initSizes() {
    this.sizes = await this.firestoreService.getSizes();
  }

  sizeChecked = key => {
    this.selected = key;
    this.onSizeChecked.emit(key);
  };

}
