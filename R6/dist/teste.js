// Módulo teste.ts
// Script de teste automatizado para demonstrar todas as operações
import Soma from './soma.js';
import Subtracao from './subtracao.js';
import Multiplicacao from './multiplicacao.js';
import Divisao from './divisao.js';
import Potenciacao from './potenciacao.js';
import Radiciacao from './radiciacao.js';
import Bhaskara from './bhaskara.js';
console.log("=== TESTE AUTOMATIZADO DA R6: Calculadora Polimórfica ===\n");
// Teste das operações binárias
console.log("--- OPERAÇÕES BINÁRIAS ---");
const soma = new Soma();
console.log(`Soma: 10 + 5 = ${soma.calcular(10, 5)}`);
const subtracao = new Subtracao();
console.log(`Subtração: 10 - 5 = ${subtracao.calcular(10, 5)}`);
const multiplicacao = new Multiplicacao();
console.log(`Multiplicação: 10 × 5 = ${multiplicacao.calcular(10, 5)}`);
const divisao = new Divisao();
console.log(`Divisão: 10 ÷ 5 = ${divisao.calcular(10, 5)}`);
console.log(`Divisão por zero: 10 ÷ 0 = ${divisao.calcular(10, 0)}`);
const potenciacao = new Potenciacao();
console.log(`Potenciação: 2^3 = ${potenciacao.calcular(2, 3)}`);
const radiciacao = new Radiciacao();
console.log(`Radiciação: ³√27 = ${radiciacao.calcular(27, 3)}`);
// Teste Bhaskara
console.log("\n--- FÓRMULA DE BHASKARA ---");
const bhaskara = new Bhaskara();
console.log("\nEquação: x² - 5x + 6 = 0 (a=1, b=-5, c=6)");
let raizes = bhaskara.calcularRaizes(1, -5, 6);
console.log(`Raízes: x1 = ${raizes[0]}, x2 = ${raizes[1]}`);
console.log("\nEquação: x² - 4x + 4 = 0 (a=1, b=-4, c=4)");
raizes = bhaskara.calcularRaizes(1, -4, 4);
console.log(`Raiz dupla: x = ${raizes[0]}`);
console.log("\nEquação: x² + x + 1 = 0 (a=1, b=1, c=1)");
raizes = bhaskara.calcularRaizes(1, 1, 1);
if (raizes.length === 0) {
    console.log("Sem raízes reais (Δ < 0)");
}
console.log("\n=== DEMONSTRAÇÃO DE POLIMORFISMO ===");
console.log("Todas as operações binárias implementam o método calcular(n1, n2)");
console.log("através da classe abstrata Calculo, permitindo tratamento uniforme.\n");
//# sourceMappingURL=teste.js.map