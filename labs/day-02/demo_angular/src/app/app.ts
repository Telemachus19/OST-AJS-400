import { Component } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Footer,Home,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
