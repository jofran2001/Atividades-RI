# R4 - Sistema Modular com Import/Export ES6

Esta atividade implementa o mesmo sistema da R3, mas agora usando **módulos ES6** com `import` e `export`, separando as classes em um módulo reutilizável e o código de teste em outro arquivo.

## Estrutura

- `R4/src/empresa.js`: Módulo exportando as classes `Telefone`, `Endereco`, `Cliente` e `Empresa`
- `R4/src/teste.js`: Módulo de teste que importa as classes e executa o cenário
- `R4/package.json`: Configuração com `"type": "module"` para suporte ES6

## Funcionalidades

### Módulo empresa.js
Exporta 4 classes com sintaxe ES6:

#### Telefone
- Atributos públicos: `ddd`, `numero`
- Métodos: Upper/Lower para ambos

#### Endereco
- Atributos públicos: `estado`, `cidade`, `rua`, `numero`
- Métodos: Upper/Lower para strings

#### Cliente
- Atributos: `nome`, `#cpf` (privado), `endereco`, `telefones` (Set)
- Métodos: `getCpf()`, Upper/Lower, `adicionarTelefone()`

#### Empresa
- Atributos: `razaoSocial`, `nomeFantasia`, `#cnpj` (privado), `endereco`, `clientes` (Set), `telefones` (Set)
- Métodos: `getCnpj()`, Upper/Lower, `adicionarCliente()`, `adicionarTelefone()`, `detalhe()`

### Módulo teste.js
- Importa as 4 classes usando sintaxe ES6
- Cria 1 empresa com 2 telefones
- Cria 5 clientes (cada um com endereço e 2 telefones)
- Executa e imprime `empresa.detalhe()`

## Como rodar

Pré-requisito: Node.js instalado.

### Opção 1: Usando npm
```bash
cd R4
npm start
```

### Opção 2: Diretamente com Node
```bash
node R4/src/teste.js
```

## Diferença da R3

- **R3**: Código monolítico em um único arquivo
- **R4**: Código modular com separação de responsabilidades (classes em `empresa.js`, testes em `teste.js`)
- **R4**: Usa `import`/`export` ES6 com `package.json` configurado

## Saída esperada

Detalhes completos da empresa e 5 clientes com todos os dados formatados.
