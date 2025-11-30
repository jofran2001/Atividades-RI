# R6 - Calculadora Polimórfica com TypeScript

Esta atividade implementa uma calculadora usando **TypeScript**, **classes abstratas**, **herança**, **polimorfismo** e interface CLI interativa com `readline`.

## Estrutura do Projeto

### Parte 1: Classe Abstrata e Operações Binárias

#### `calculo.ts` - Classe Abstrata Base
```typescript
export default abstract class Calculo {
  public abstract calcular(numero1: number, numero2: number): number;
}
```

#### Operações que herdam de Calculo
1. **`soma.ts`**: Adição (numero1 + numero2)
2. **`subtracao.ts`**: Subtração (numero1 - numero2)
3. **`multiplicacao.ts`**: Multiplicação (numero1 × numero2)
4. **`divisao.ts`**: Divisão (numero1 ÷ numero2) com tratamento de divisão por zero
5. **`potenciacao.ts`**: Potenciação (numero1^numero2)
6. **`radiciacao.ts`**: Radiciação (∜numero1 = numero1^(1/numero2))

### Parte 2: Fórmula de Bhaskara

#### `bhaskara.ts` - Raízes de Equação de Segundo Grau
- **Método**: `calcularRaizes(a, b, c): number[]`
- **Fórmula**: $x = \frac{-b \pm \sqrt{\Delta}}{2a}$ onde $\Delta = b^2 - 4ac$
- **Retorno**:
  - Δ > 0: Array com 2 raízes reais
  - Δ = 0: Array com 1 raiz (raiz dupla)
  - Δ < 0: Array vazio (sem raízes reais)

### Parte 3: Interface CLI

#### `app.ts` - Aplicação Principal
- Interface interativa usando `readline`
- **Switch polimórfico**: Instancia dinamicamente a classe apropriada
- Suporta todas as 6 operações binárias + Bhaskara
- Loop contínuo até usuário digitar "Sair"

## Conceitos Demonstrados

✅ **Abstração**: Classe abstrata `Calculo` define contrato
✅ **Herança**: 6 classes herdam de `Calculo`
✅ **Polimorfismo**: Variável tipo `Calculo` pode referenciar qualquer subclasse
✅ **Encapsulamento**: TypeScript com tipos fortes
✅ **Interface CLI**: Interação usuário via readline

## Como rodar

### Pré-requisitos
- Node.js instalado
- npm ou yarn

### Instalação
```bash
cd R6
npm install
```

### Compilar TypeScript
```bash
npm run build
```

### Executar
```bash
npm start
```

ou diretamente após build:
```bash
node dist/app.js
```

## Exemplo de Uso

```
=== CALCULADORA POLIMÓRFICA ===

Operações disponíveis:
  - Somar, Subtrair, Multiplicar, Dividir
  - Potenciacao, Radiciacao
  - Bhaskara (equação de segundo grau)

Digite a operação: Somar
Digite dois números separados por espaço: 5 3
Resultado: 8

Digite a operação: Bhaskara
Digite os coeficientes a, b, c: 1 -5 6
Raízes: x1 = 3, x2 = 2

Digite a operação: Sair
Encerrando calculadora...
```

## Estrutura de Arquivos

```
R6/
├── src/
│   ├── calculo.ts           # Classe abstrata
│   ├── soma.ts              # Herda de Calculo
│   ├── subtracao.ts         # Herda de Calculo
│   ├── multiplicacao.ts     # Herda de Calculo
│   ├── divisao.ts           # Herda de Calculo
│   ├── potenciacao.ts       # Herda de Calculo
│   ├── radiciacao.ts        # Herda de Calculo
│   ├── bhaskara.ts          # Classe independente
│   └── app.ts               # Interface CLI
├── dist/                    # Código JavaScript compilado
├── tsconfig.json            # Configuração TypeScript
├── package.json             # Dependências e scripts
└── README.md                # Documentação
```

## Diferenças das RIs anteriores

- **R1-R5**: JavaScript puro
- **R6**: TypeScript com tipagem estática
- **R6**: Uso de classes abstratas e polimorfismo explícito
- **R6**: Interface CLI interativa (readline)
- **R6**: Compilação TS → JS antes da execução
