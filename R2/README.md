# R2 - Sistema de Clientes com Encapsulamento

Esta atividade implementa funções construtoras em JavaScript com encapsulamento completo, métodos de acesso (getters/setters) e transformação de dados (Upper/Lower).

## Estrutura

- `R2/src/main.js`: Contém as funções construtoras `TelefoneCelular`, `Endereco`, `Cliente` e a função de ordenação `ordenarClientesPorNome()`.

## Funcionalidades

### 1. TelefoneCelular
- Atributos: `ddd`, `numero`
- Métodos: get/set para cada atributo, Upper/Lower para cada

### 2. Endereco
- Atributos: `estado`, `cidade`, `rua`, `numero`
- Métodos: get/set para cada atributo, Upper/Lower para cada

### 3. Cliente
- Atributos: `nome`, `telefoneCelular`, `email`, `endereco`
- Métodos: get/set para cada atributo, Upper/Lower para strings
- Propriedade `descricao`: retorna formatação completa dos dados

### 4. Ordenação
- Função `ordenarClientesPorNome()`: ordena array de clientes alfabeticamente

## Como rodar

Pré-requisito: Node.js instalado.

```bash
node R2/src/main.js
```

## Saída esperada

- Descrição formatada de um cliente
- Lista original de clientes
- Lista ordenada alfabeticamente
- Demonstração dos métodos Upper/Lower
