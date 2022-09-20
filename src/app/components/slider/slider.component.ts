import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedDataService } from 'src/app/shared/services/feed-data.service';
import { faArrowAltCircleLeft, faArrowAltCircleRight  } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  feed$: Observable<any[]>;
  index = 0;
  faArrowLeft = faArrowAltCircleLeft;
  faArrowRight = faArrowAltCircleRight;
  constructor(private feedDataService: FeedDataService) {
    this.feed$ = this.feedDataService.feed$.asObservable();
  }

  ngOnInit(): void {
    this.feedDataService.init();
  }

  nextVideo(length: number) {
    if (this.index + 1 === length) {
      this.index = 0;
    } else {
      this.index++;
    }
  }

  prevVideo(length: number) {
    if (this.index - 1 === 0) {
      this.index = length - 1;
    } else {
      this.index--;
    }
  }
}
