import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('search') searchInput: ElementRef | undefined;
  public step: 1 | 2 | 3 | 4 = 1;
  constructor() {
    setTimeout(() => {
      this.searchInput?.nativeElement.focus();
      this.step=2;
    }, 100);
  }
}
