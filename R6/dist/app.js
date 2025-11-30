// Módulo app.ts
// Interface CLI para demonstração de polimorfismo e operações matemáticas
import * as readline from 'readline';
import Soma from './soma.js';
import Subtracao from './subtracao.js';
import Multiplicacao from './multiplicacao.js';
import Divisao from './divisao.js';
import Potenciacao from './potenciacao.js';
import Radiciacao from './radiciacao.js';
import Bhaskara from './bhaskara.js';
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("=== CALCULADORA POLIMÓRFICA ===\n");
console.log("Operações disponíveis:");
console.log("  - Somar, Subtrair, Multiplicar, Dividir");
console.log("  - Potenciacao, Radiciacao");
console.log("  - Bhaskara (equação de segundo grau)\n");
function executarOperacao() {
    leitor.question('Digite a operação (ex: Somar, Bhaskara) ou "Sair" para encerrar: ', (operacao) => {
        operacao = operacao.trim();
        if (operacao.toLowerCase() === 'sair') {
            console.log('\nEncerrando calculadora...');
            leitor.close();
            return;
        }
        if (operacao.toLowerCase() === 'bhaskara') {
            // Caso especial: Bhaskara (3 coeficientes)
            leitor.question('Digite os coeficientes a, b, c separados por espaço: ', (entrada) => {
                const valores = entrada.split(' ').map(Number);
                if (valores.length !== 3 || valores.some(isNaN)) {
                    console.log('Erro: Forneça exatamente 3 números válidos.\n');
                    executarOperacao();
                    return;
                }
                const [a, b, c] = valores;
                const bhaskara = new Bhaskara();
                const raizes = bhaskara.calcularRaizes(a, b, c);
                if (raizes.length === 2) {
                    console.log(`Raízes: x1 = ${raizes[0]}, x2 = ${raizes[1]}\n`);
                }
                else if (raizes.length === 1) {
                    console.log(`Raiz dupla: x = ${raizes[0]}\n`);
                }
                else {
                    console.log('Sem raízes reais.\n');
                }
                executarOperacao();
            });
        }
        else {
            // Operações binárias (2 números)
            leitor.question('Digite dois números separados por espaço: ', (entrada) => {
                const valores = entrada.split(' ').map(Number);
                if (valores.length !== 2 || valores.some(isNaN)) {
                    console.log('Erro: Forneça exatamente 2 números válidos.\n');
                    executarOperacao();
                    return;
                }
                const [numero1, numero2] = valores;
                let calculo = null;
                // Switch polimórfico
                switch (operacao.toLowerCase()) {
                    case 'somar':
                        calculo = new Soma();
                        break;
                    case 'subtrair':
                        calculo = new Subtracao();
                        break;
                    case 'multiplicar':
                        calculo = new Multiplicacao();
                        break;
                    case 'dividir':
                        calculo = new Divisao();
                        break;
                    case 'potenciacao':
                        calculo = new Potenciacao();
                        break;
                    case 'radiciacao':
                        calculo = new Radiciacao();
                        break;
                    default:
                        console.log('Operação desconhecida. Tente novamente.\n');
                        executarOperacao();
                        return;
                }
                if (calculo) {
                    const resultado = calculo.calcular(numero1, numero2);
                    console.log(`Resultado: ${resultado}\n`);
                }
                executarOperacao();
            });
        }
    });
}
// Iniciar a aplicação
executarOperacao();
//# sourceMappingURL=app.js.map