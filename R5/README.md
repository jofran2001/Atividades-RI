# R5 - Sistema com Arquitetura Modular Baseada em UML

Esta atividade implementa um sistema de empresa seguindo rigorosamente o **diagrama UML** apresentado no PDF da atividade, com arquitetura modular onde cada classe está em seu próprio arquivo.

## Estrutura de Módulos

### Módulos de Classe Base

1. **`telefone.js`** 
   - Classe: `Telefone`
   - Atributos: `ddd: string`, `numero: string`
   - Export: `export default Telefone`

2. **`endereco.js`**
   - Classe: `Endereco`
   - Atributos: `numero: number`, `rua: string`, `bairro: string`, `cidade: string`
   - Export: `export default Endereco`

3. **`funcionario.js`**
   - Classe: `Funcionario`
   - Dependências: `Endereco`, `Telefone`
   - Atributos: `nome: string`, `matricula: string`, `cpf: string`, `endereco: Endereco`, `telefone: Telefone`
   - Export: `export default Funcionario`

4. **`empresa.js`**
   - Classe: `Empresa`
   - Dependências: `Funcionario`, `Endereco`
   - Atributos: `funcionarios: Funcionario[]`, `endereco: Endereco`, `razaoSocial: string`, `nomeFantasia: string`, `cnpj: string`
   - Construtor: Recebe parâmetros na ordem: `(funcionarios, endereco, razaoSocial, nomeFantasia, cnpj)`
   - Export: `export default Empresa`

### Módulo Descritor

5. **`descritorEmpresa.js`**
   - Classe: `DescritorEmpresa`
   - Método: `descrever(empresaObj)` - Imprime detalhes formatados da empresa e funcionários
   - Export: `export default DescritorEmpresa`

### Módulo de Teste

6. **`main.js`**
   - Importa todos os módulos
   - Instancia objetos conforme diagrama UML
   - Executa `descritor.descrever(empresa)`

## Diagrama UML (Estrutura)

```
Telefone
├─ ddd: string
└─ numero: string

Endereco
├─ numero: number
├─ rua: string
├─ bairro: string
└─ cidade: string

Funcionario
├─ nome: string
├─ matricula: string
├─ cpf: string
├─ endereco: Endereco
└─ telefone: Telefone

Empresa
├─ razaoSocial: string
├─ nomeFantasia: string
├─ cnpj: string
├─ endereco: Endereco
└─ funcionarios: Funcionario[]

DescritorEmpresa
└─ descrever(empresaObj): void
```

## Como rodar

Pré-requisito: Node.js instalado.

### Opção 1: Usando npm
```bash
cd R5
npm start
```

### Opção 2: Diretamente com Node
```bash
node R5/src/main.js
```

## Diferenças entre R4 e R5

- **R4**: Classes agrupadas por funcionalidade (todas as classes em `empresa.js`)
- **R5**: Cada classe em seu próprio módulo (arquitetura mais granular)
- **R5**: Segue diagrama UML rigoroso com tipos e ordem de parâmetros específicos
- **R5**: Padrão Descritor separado para responsabilidade de apresentação

## Saída esperada

Detalhes formatados da empresa e 3 funcionários com todos os dados (nome, matrícula, CPF, endereço, telefone).
