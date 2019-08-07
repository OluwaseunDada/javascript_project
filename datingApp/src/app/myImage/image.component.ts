import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  template: '<div class="thumbnail"><img style="width: 400%; height: 100%;" src="{{imageUrl}}"/></div>',
  styles: [
      `
      .thumbnail{
        width: 200px;
        height: 300px;
      }
  `
  ]
})
export class ImageComponent 
{
  @Input() imageUrl;
}
