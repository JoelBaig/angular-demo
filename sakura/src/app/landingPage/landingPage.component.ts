import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section>
        <div class="headlines">
            <h1 class="fontRaleway">SAKURA RAMEN</h1>
            <h2 class="fontRaleway">BEST RAMEN IN TOWN</h2>
        </div>
    </section>
    `,
    styleUrls: ['./landingPage.component.scss']
})
export class landingPageComponent {

}