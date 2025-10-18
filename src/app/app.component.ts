import { Component } from '@angular/core';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header],
  templateUrl: './app.component.html',
})
export class AppComponent {}
