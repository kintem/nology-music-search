import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'nology-music-search';
  hats = ['beanie', 'beret', 'cowboy'];

  addItem(newHat: string) {
    this.hats.push(newHat);
  }
}
