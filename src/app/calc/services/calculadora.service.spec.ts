import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garatir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    }))

  it('deve garantir que 5 - 2 = 3', inject([CalculadoraService], (service: CalculadoraService) => {
    let sub = service.calcular(5, 2, CalculadoraService.SUBTRACAO);
    expect(sub).toEqual(3);
  }))

  it('deve garatir que 3 x 3 = 9', inject([CalculadoraService], (service: CalculadoraService) => {
    let mult = service.calcular(3, 3, CalculadoraService.MULTIPLICACAO);
    expect(mult).toEqual(9);
  }))

  it('deve garatir que 10 / 2 = 5', inject([CalculadoraService], (service: CalculadoraService) => {
    let div = service.calcular(10, 2, CalculadoraService.DIVISAO);
    expect(div).toEqual(5);
  }))

  it('deve retornar 0 operação inválida', inject([CalculadoraService], (service: CalculadoraService) => {
    let inv = service.calcular(1, 4, '&');
    expect(inv).toEqual(0);
  }))
});
