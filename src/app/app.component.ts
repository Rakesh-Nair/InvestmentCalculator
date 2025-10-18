import { Component } from '@angular/core';
import { Header } from './header/header';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, UserInputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
