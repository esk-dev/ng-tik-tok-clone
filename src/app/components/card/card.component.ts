import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  faShare,
  faThumbsUp,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() post: any;
  like = faThumbsUp;
  share = faShare;
  comments = faComments;
  constructor() {}

  ngOnInit(): void {}
}
