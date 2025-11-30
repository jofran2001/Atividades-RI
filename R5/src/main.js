import Telefone from './telefone.js';
import Endereco from './endereco.js';
import Funcionario from './funcionario.js';
import Empresa from './empresa.js';
import DescritorEmpresa from './descritorEmpresa.js';

console.log("=== TESTE DA R5: Sistema com Arquitetura Modular UML ===\n");

const enderecoFunc1 = new Endereco(123, 'Rua das Flores', 'Centro', 'São Paulo');
const telefoneFunc1 = new Telefone('11', '98765-4321');

const enderecoFunc2 = new Endereco(456, 'Av. Paulista', 'Bela Vista', 'São Paulo');
const telefoneFunc2 = new Telefone('11', '97654-3210');

const enderecoFunc3 = new Endereco(789, 'Rua Augusta', 'Consolação', 'São Paulo');
const telefoneFunc3 = new Telefone('11', '96543-2109');

const funcionario1 = new Funcionario(
  'João Silva',
  '001',
  '123.456.789-01',
  enderecoFunc1,
  telefoneFunc1
);

const funcionario2 = new Funcionario(
  'Maria Santos',
  '002',
  '234.567.890-12',
  enderecoFunc2,
  telefoneFunc2
);

const funcionario3 = new Funcionario(
  'Pedro Oliveira',
  '003',
  '345.678.901-23',
  enderecoFunc3,
  telefoneFunc3
);

const funcionarios = [funcionario1, funcionario2, funcionario3];

const enderecoEmpresa = new Endereco(1000, 'Av. Brigadeiro Faria Lima', 'Itaim Bibi', 'São Paulo');

const empresa = new Empresa(
  funcionarios,
  enderecoEmpresa,
  'Tech Solutions LTDA',
  'TechSol',
  '12.345.678/0001-90'
);

const descritor = new DescritorEmpresa();

descritor.descrever(empresa);
