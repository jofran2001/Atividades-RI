// Módulo radiciacao.ts
// Classe Radiciacao: implementa radiciação (raiz n de x = x^(1/n))
import Calculo from './calculo.js';
export default class Radiciacao extends Calculo {
    calcular(numero1, numero2) {
        // Raiz n de x = x^(1/n)
        // numero1 = x (radicando), numero2 = n (índice)
        return Math.pow(numero1, 1 / numero2);
    }
}
//# sourceMappingURL=radiciacao.js.map