// Módulo divisao.ts
// Classe Divisao: implementa divisão com tratamento de divisão por zero
import Calculo from './calculo.js';
export default class Divisao extends Calculo {
    calcular(numero1, numero2) {
        if (numero2 === 0) {
            console.warn('Aviso: Divisão por zero!');
            return Infinity;
        }
        return numero1 / numero2;
    }
}
//# sourceMappingURL=divisao.js.map