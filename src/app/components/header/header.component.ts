import { Component, OnInit } from '@angular/core';
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faTikTok = faTiktok;
  constructor() {}

  ngOnInit(): void {
  }

}
