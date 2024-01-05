// formula.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormulaService {
  calcularFormula(a: number, b: number, x: number): number {
    return a * x + b;
  }
}
