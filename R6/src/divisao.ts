import Calculo from './calculo.js';

export default class Divisao extends Calculo {
  public calcular(numero1: number, numero2: number): number {
    if (numero2 === 0) {
      console.warn('Aviso: Divisão por zero!');
      return Infinity;
    }
    return numero1 / numero2;
  }
}
