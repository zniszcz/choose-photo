import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-menu',
  template: `
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" routerLink="/">Cat or stock?</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" routerLink="/news">Najnowsze</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/search">Szukaj</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`

  `]
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
