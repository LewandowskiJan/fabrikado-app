import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  public backgroundImage: string | undefined;
  @Input() type: string = '';
  @Input() set imageName(name: string) {
    this.backgroundImage = `url("./../../../../assets/images/${name}.jpg")`;
  }
}
