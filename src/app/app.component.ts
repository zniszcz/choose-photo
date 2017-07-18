import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main-menu></main-menu>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`

  `]
})
export class AppComponent {
}
