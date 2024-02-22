import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeComponent, PanelComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
