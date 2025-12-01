# Atividades de Revisão Intermediária (RIs)

Este repositório contém 6 atividades de revisão intermediária focadas em programação orientada a objetos, modularização e arquitetura de software em JavaScript e TypeScript.

## 📚 Estrutura do Repositório

Cada atividade (R1 a R6) está organizada em sua própria pasta com código fonte, testes e documentação específica.

```
Atividades-RI/
├── R1/          # Objetos e Comparações
├── R2/          # Funções Construtoras e Encapsulamento
├── R3/          # Classes ES6 e Atributos Privados
├── R4/          # Módulos ES6 (Import/Export)
├── R5/          # Arquitetura Modular UML
└── R6/          # TypeScript e Polimorfismo
```

## 🎯 Resumo das Atividades

### R1 - Modelagem de Personagens (Vingadores vs Thanos)
**Tecnologia:** JavaScript puro  
**Conceitos:** Objetos, Arrays, Loops, Comparações

Implementa objetos representando os Vingadores e Thanos, com comparações ponto a ponto de atributos numéricos (velocidade, força, resistência).

📖 [Ver documentação completa](R1/README.md)

```bash
node R1/src/avengers.js
```

---

### R2 - Sistema de Clientes com Encapsulamento
**Tecnologia:** JavaScript (Funções Construtoras)  
**Conceitos:** Encapsulamento, Getters/Setters, Closures, Ordenação

Sistema de gerenciamento de clientes usando funções construtoras com:
- Encapsulamento via closures
- Métodos get/set para todos os atributos
- Métodos Upper/Lower para transformação de strings
- Função de ordenação alfabética

📖 [Ver documentação completa](R2/README.md)

```bash
node R2/src/main.js
```

---

### R3 - Sistema de Empresa com Classes ES6
**Tecnologia:** JavaScript (Classes ES6)  
**Conceitos:** Classes, Atributos Privados (#), Sets, Composição

Implementa um sistema de empresa com clientes usando:
- Classes ES6 modernas
- Atributos privados (#cpf, #cnpj)
- Sets para coleções únicas
- Método `detalhe()` para descrição formatada

📖 [Ver documentação completa](R3/README.md)

```bash
node R3/src/main.js
```

---

### R4 - Sistema Modular com Import/Export ES6
**Tecnologia:** JavaScript (Módulos ES6)  
**Conceitos:** Modularização, Import/Export, Separação de Responsabilidades

Mesma implementação da R3, mas com arquitetura modular:
- `empresa.js`: Módulo exportando todas as classes
- `teste.js`: Módulo de teste importando as classes
- Demonstração de reutilização de código

📖 [Ver documentação completa](R4/README.md)

```bash
node R4/src/teste.js
```

---

### R5 - Arquitetura Modular Baseada em UML
**Tecnologia:** JavaScript (Arquitetura Granular)  
**Conceitos:** UML, Padrão Descritor, Módulos Granulares

Sistema seguindo diagrama UML rigoroso com:
- Cada classe em seu próprio módulo
- Padrão Descritor para apresentação
- Tipos específicos conforme UML (number vs string)
- Ordem de parâmetros conforme especificação

📖 [Ver documentação completa](R5/README.md)

```bash
node R5/src/main.js
```

---

### R6 - Calculadora Polimórfica com TypeScript
**Tecnologia:** TypeScript  
**Conceitos:** Classes Abstratas, Herança, Polimorfismo, CLI Interativa

Calculadora demonstrando conceitos de POO:
- Classe abstrata `Calculo` como contrato
- 6 operações binárias herdando de `Calculo`
- Classe `Bhaskara` para equações de 2º grau
- Interface CLI interativa com readline
- Switch polimórfico

📖 [Ver documentação completa](R6/README.md)

```bash
cd R6
npm install
npm test        # Teste automatizado
npm start       # CLI interativa
```

---

## 🚀 Evolução dos Conceitos

| RI | Tecnologia | Paradigma | Conceito Principal |
|----|------------|-----------|-------------------|
| R1 | JavaScript | Imperativo | Objetos literais e comparações |
| R2 | JavaScript | OOP Básico | Funções construtoras + closures |
| R3 | JavaScript | OOP ES6 | Classes modernas + atributos privados |
| R4 | JavaScript | Modular | Import/Export ES6 |
| R5 | JavaScript | Arquitetural | UML + Padrão Descritor |
| R6 | **TypeScript** | OOP Avançado | **Abstração + Polimorfismo** |

## 📋 Pré-requisitos

- **Node.js** (v14 ou superior)
- **npm** (gerenciador de pacotes)

### Instalação do Node.js

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install nodejs npm
```

**Verificar instalação:**
```bash
node --version
npm --version
```

## 🎓 Conceitos de Programação Demonstrados

### Programação Orientada a Objetos
- ✅ Encapsulamento (closures e atributos privados)
- ✅ Abstração (classes abstratas)
- ✅ Herança (extends)
- ✅ Polimorfismo (métodos abstratos e override)

### Arquitetura de Software
- ✅ Separação de responsabilidades
- ✅ Modularização
- ✅ Padrão Descritor
- ✅ Conformidade com UML

### JavaScript/TypeScript Moderno
- ✅ ES6 Classes
- ✅ ES6 Modules (import/export)
- ✅ Private fields (#)
- ✅ Sets e Maps
- ✅ TypeScript types
- ✅ Abstract classes

## 🔧 Como Executar Cada Atividade

### JavaScript Puro (R1, R2, R3)
```bash
node R<número>/src/<arquivo>.js
```

### Módulos ES6 (R4, R5)
```bash
node R<número>/src/<arquivo>.js
```

### TypeScript (R6)
```bash
cd R6
npm install     # Primeira vez apenas
npm run build   # Compilar TypeScript
npm test        # Executar testes
npm start       # Executar CLI
```

## 📝 Estrutura de Cada RI

Cada pasta de atividade contém:

```
R<número>/
├── src/              # Código fonte
│   ├── *.js          # Arquivos JavaScript/TypeScript
│   └── ...
├── README.md         # Documentação específica
└── package.json      # Dependências (quando aplicável)
```

## 🌟 Destaques por Atividade

### R1 🦸 Vingadores
- Loop aninhado para comparações
- Método `descricao()` como propriedade
- Formatação de saída estruturada

### R2 👥 Clientes
- Encapsulamento com closures
- Métodos Upper/Lower para todos os atributos
- Algoritmo de ordenação alfabética

### R3 🏢 Empresa (Classes)
- Atributos privados nativos (#)
- Sets para prevenir duplicatas
- Composição de objetos complexos

### R4 📦 Modular
- Export default
- Import seletivo
- Separação clara: lógica vs teste

### R5 🏗️ UML
- 1 classe = 1 arquivo
- Padrão Descritor isolado
- Tipos conforme especificação

### R6 🧮 Calculadora
- Classe abstrata como contrato
- Polimorfismo em ação
- TypeScript com tipos fortes
- CLI interativa




