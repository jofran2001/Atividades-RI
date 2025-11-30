# R3 - Sistema de Empresa com Classes ES6

Esta atividade implementa um sistema de gerenciamento de empresa e clientes usando **classes ES6** com atributos privados, Sets para coleções únicas e métodos de utilidade.

## Estrutura

- `R3/src/main.js`: Contém as classes `Telefone`, `Endereco`, `Cliente` e `Empresa`.

## Funcionalidades

### 1. Classe Telefone
- **Atributos públicos**: `ddd`, `numero`
- **Métodos**: `getDddUpper()`, `getDddLower()`, `getNumeroUpper()`, `getNumeroLower()`

### 2. Classe Endereco
- **Atributos públicos**: `estado`, `cidade`, `rua`, `numero`
- **Métodos**: Upper/Lower para `estado`, `cidade`, `rua`

### 3. Classe Cliente
- **Atributos**: `nome`, `#cpf` (privado), `endereco`, `telefones` (Set)
- **Métodos**: 
  - `getCpf()`: acesso ao CPF privado
  - `getNomeUpper()`, `getNomeLower()`
  - `adicionarTelefone(telefoneObj)`

### 4. Classe Empresa
- **Atributos**: `razaoSocial`, `nomeFantasia`, `#cnpj` (privado), `endereco`, `clientes` (Set), `telefones` (Set)
- **Métodos**:
  - `getCnpj()`: acesso ao CNPJ privado
  - Upper/Lower para `razaoSocial` e `nomeFantasia`
  - `adicionarCliente(clienteObj)`
  - `adicionarTelefone(telefoneObj)`
  - `detalhe()`: retorna descrição completa da empresa e todos os clientes

## Como rodar

Pré-requisito: Node.js instalado.

```bash
node R3/src/main.js
```

## Saída esperada

- Detalhes da empresa (razão social, CNPJ, endereço, telefones)
- Lista de 5 clientes com seus respectivos dados completos
- Demonstração dos métodos Upper/Lower
