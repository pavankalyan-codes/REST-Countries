import { Component, OnInit } from '@angular/core';
import { ModeService } from '../mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mode: number = 1;

  constructor(public modeService: ModeService) {}

  ngOnInit(): void {}

  changeMode() {
    if (this.mode == 1) {
      this.modeService.mode$.next('dark');
      this.mode = 0;
    } else {
      this.modeService.mode$.next('light');
      this.mode = 1;
    }
  }
}
