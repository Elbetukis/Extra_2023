// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a: number = 0; // Inicializamos 'a' aquí
  b: number = 0; // Inicializamos 'b' aquí
  x: number = 0;
  resultado: number = 0;

  calcularFormula() {
    // Tu lógica de cálculo aquí
    this.resultado = this.a * this.x + this.b;
  }
}
