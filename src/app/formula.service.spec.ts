// formula.service.spec.ts

import { TestBed } from '@angular/core/testing';
import { FormulaService } from './formula.service';

describe('FormulaService', () => {
  let service: FormulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate the formula correctly', () => {
    const a = 2;
    const b = 3;
    const x = 5;

    const result = service.calcularFormula(a, b, x);

    expect(result).toBe(13);
  });
  it('should handle zero values for all parameters', () => {
    const a = 0;
    const b = 0;
    const x = 0;

    const result = service.calcularFormula(a, b, x);

    expect(result).toBe(0);
  });
  it('should handle negative values for all parameters', () => {
    const a = 1;
    const b = 1;
    const x = 1;

    const result = service.calcularFormula(a, b, x);

    expect(result).toBe(2);
  });
  it('should handle negative values for all parameters', () => {
    const a = 2;
    const b = 2;
    const x = 2;

    const result = service.calcularFormula(a, b, x);

    expect(result).toBe(6);
  });
  it('should handle negative values for all parameters', () => {
    const a = 4;
    const b = 4;
    const x = 4;

    const result = service.calcularFormula(a, b, x);

    expect(result).toBe(20);
  });

  it('should handle negative values for all parameters', () => {
    const a = 5;
    const b = 5;
    const x = 5;

    const result = service.calcularFormula(a, b, x);

    expect(result).toBe(30);
  });
    it('should handle negative values for all parameters', () => {
        const a = 6;
        const b = 6;
        const x = 6;
    
        const result = service.calcularFormula(a, b, x);
    
        expect(result).toBe(42);
    });
    it('should handle negative values for all parameters', () => {
        const a = 7;
        const b = 7;
        const x = 7;
    
        const result = service.calcularFormula(a, b, x);
    
        expect(result).toBe(56);
    });
    it('should handle negative values for all parameters', () => {
        const a = 8;
        const b = 8;
        const x = 8;
    
        const result = service.calcularFormula(a, b, x);
    
        expect(result).toBe(72);
    });
    it('should handle negative values for all parameters', () => {
        const a = 9;
        const b = 9;
        const x = 9;
    
        const result = service.calcularFormula(a, b, x);
    
        expect(result).toBe(90);
    });
});
