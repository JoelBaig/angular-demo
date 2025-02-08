import { Component } from '@angular/core';
import { MainContentComponent } from '../main-content.component';
import { landingPageComponent } from "../landingPage/landingPage.component";
import { OurMenuComponent } from "../our-menu/our-menu.component";

@Component({
  selector: 'app-how-to-order',
  standalone: true,
  imports: [
    MainContentComponent,
    landingPageComponent,
    OurMenuComponent],
  templateUrl: './how-to-order.component.html',
  styleUrl: './how-to-order.component.scss'
})
export class HowToOrderComponent {

}
