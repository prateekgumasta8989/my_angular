import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular';
  public name: string = 'Prateek';
  constructor(){}
  change(){this.name = 'Gumasta';}
}
