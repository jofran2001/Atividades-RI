import { Telefone, Endereco, Cliente, Empresa } from './empresa.js';

console.log("=== TESTE DA R4: Sistema Modular com Import/Export ES6 ===\n");

const enderecoEmpresa = new Endereco('SP', 'São Paulo', 'Av. Brigadeiro Faria Lima', '1000');
const telefoneEmpresa1 = new Telefone('11', '3030-4040');
const telefoneEmpresa2 = new Telefone('11', '3030-4041');

const empresa = new Empresa(
  'Tech Solutions LTDA',
  'TechSol',
  '12.345.678/0001-90',
  enderecoEmpresa
);

empresa.adicionarTelefone(telefoneEmpresa1);
empresa.adicionarTelefone(telefoneEmpresa2);

const cliente1 = new Cliente('João Silva', '123.456.789-01', 
  new Endereco('SP', 'São Paulo', 'Rua Augusta', '500'));
cliente1.adicionarTelefone(new Telefone('11', '98765-4321'));
cliente1.adicionarTelefone(new Telefone('11', '98765-4322'));

const cliente2 = new Cliente('Maria Santos', '234.567.890-12', 
  new Endereco('RJ', 'Rio de Janeiro', 'Av. Atlântica', '1500'));
cliente2.adicionarTelefone(new Telefone('21', '97654-3210'));
cliente2.adicionarTelefone(new Telefone('21', '97654-3211'));

const cliente3 = new Cliente('Pedro Oliveira', '345.678.901-23', 
  new Endereco('MG', 'Belo Horizonte', 'Av. Afonso Pena', '2000'));
cliente3.adicionarTelefone(new Telefone('31', '96543-2109'));
cliente3.adicionarTelefone(new Telefone('31', '96543-2110'));

const cliente4 = new Cliente('Ana Costa', '456.789.012-34', 
  new Endereco('RS', 'Porto Alegre', 'Rua dos Andradas', '300'));
cliente4.adicionarTelefone(new Telefone('51', '95432-1098'));
cliente4.adicionarTelefone(new Telefone('51', '95432-1099'));

const cliente5 = new Cliente('Carlos Ferreira', '567.890.123-45', 
  new Endereco('BA', 'Salvador', 'Av. Sete de Setembro', '800'));
cliente5.adicionarTelefone(new Telefone('71', '94321-0987'));
cliente5.adicionarTelefone(new Telefone('71', '94321-0988'));

empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);
empresa.adicionarCliente(cliente3);
empresa.adicionarCliente(cliente4);
empresa.adicionarCliente(cliente5);

console.log(empresa.detalhe());

console.log("\n=== VERIFICAÇÃO DE MÉTODOS UPPER/LOWER ===");
console.log(`Nome Fantasia Upper: ${empresa.getNomeFantasiaUpper()}`);
console.log(`Razão Social Lower: ${empresa.getRazaoSocialLower()}`);
console.log(`Cliente 1 Nome Upper: ${cliente1.getNomeUpper()}`);
console.log(`Estado da Empresa Upper: ${enderecoEmpresa.getEstadoUpper()}`);
