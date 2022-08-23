import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() feed!: any;
  @Input() index!: number;
  @Output() action = new EventEmitter();
  constructor() {}
  clickOnButton() {
    this.action.emit(null);
  }
  ngOnInit(): void {}
}
