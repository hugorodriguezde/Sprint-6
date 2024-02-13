import { Component } from '@angular/core';
import { PanelComponent } from '../panel/panel.component';
import { WelcomeComponent } from '../shared/welcome/welcome.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PanelComponent, WelcomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
