import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'fabrikado-app';

  public constructor(private titleService: Title) {}

  public setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
  }
}
