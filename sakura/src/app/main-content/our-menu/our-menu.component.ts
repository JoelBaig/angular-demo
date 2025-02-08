import { Component } from '@angular/core';
import { MainContentComponent } from '../main-content.component';

@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [MainContentComponent],
  templateUrl: './our-menu.component.html',
  styleUrl: './our-menu.component.scss'
})
export class OurMenuComponent {

}
