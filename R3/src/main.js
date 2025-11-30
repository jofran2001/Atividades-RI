class Telefone {
  constructor(ddd, numero) {
    this.ddd = String(ddd);
    this.numero = String(numero);
  }

  getDddUpper() {
    return this.ddd.toUpperCase();
  }

  getDddLower() {
    return this.ddd.toLowerCase();
  }

  getNumeroUpper() {
    return this.numero.toUpperCase();
  }

  getNumeroLower() {
    return this.numero.toLowerCase();
  }
}

class Endereco {
  constructor(estado, cidade, rua, numero) {
    this.estado = String(estado);
    this.cidade = String(cidade);
    this.rua = String(rua);
    this.numero = String(numero);
  }

  getEstadoUpper() {
    return this.estado.toUpperCase();
  }

  getEstadoLower() {
    return this.estado.toLowerCase();
  }

  getCidadeUpper() {
    return this.cidade.toUpperCase();
  }

  getCidadeLower() {
    return this.cidade.toLowerCase();
  }

  getRuaUpper() {
    return this.rua.toUpperCase();
  }

  getRuaLower() {
    return this.rua.toLowerCase();
  }
}

class Cliente {
  #cpf; 

  constructor(nome, cpf, endereco) {
    this.nome = String(nome);
    this.#cpf = String(cpf);
    this.endereco = endereco;
    this.telefones = new Set(); 
  }

  getCpf() {
    return this.#cpf;
  }

  getNomeUpper() {
    return this.nome.toUpperCase();
  }

  getNomeLower() {
    return this.nome.toLowerCase();
  }

  adicionarTelefone(telefoneObj) {
    this.telefones.add(telefoneObj);
  }
}

class Empresa {
  #cnpj;

  constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
    this.razaoSocial = String(razaoSocial);
    this.nomeFantasia = String(nomeFantasia);
    this.#cnpj = String(cnpj);
    this.endereco = endereco;
    this.clientes = new Set();
    this.telefones = new Set();
  }

  getCnpj() {
    return this.#cnpj;
  }

  getRazaoSocialUpper() {
    return this.razaoSocial.toUpperCase();
  }

  getRazaoSocialLower() {
    return this.razaoSocial.toLowerCase();
  }

  getNomeFantasiaUpper() {
    return this.nomeFantasia.toUpperCase();
  }

  getNomeFantasiaLower() {
    return this.nomeFantasia.toLowerCase();
  }

  adicionarCliente(clienteObj) {
    this.clientes.add(clienteObj);
  }

  adicionarTelefone(telefoneObj) {
    this.telefones.add(telefoneObj);
  }

  detalhe() {
    let resultado = `=== DETALHES DA EMPRESA ===\n`;
    resultado += `Razão Social: ${this.razaoSocial}\n`;
    resultado += `Nome Fantasia: ${this.nomeFantasia}\n`;
    resultado += `CNPJ: ${this.#cnpj}\n`;
    resultado += `Endereço: ${this.endereco.rua}, ${this.endereco.numero} - ${this.endereco.cidade}/${this.endereco.estado}\n`;
    
    resultado += `\nTelefones da Empresa:\n`;
    this.telefones.forEach(tel => {
      resultado += `  - (${tel.ddd}) ${tel.numero}\n`;
    });

    resultado += `\n=== CLIENTES DA EMPRESA ===\n`;
    let clienteIndex = 1;
    this.clientes.forEach(cliente => {
      resultado += `\nCliente ${clienteIndex}: ${cliente.nome}\n`;
      resultado += `CPF: ${cliente.getCpf()}\n`;
      resultado += `Endereço: ${cliente.endereco.rua}, ${cliente.endereco.numero} - ${cliente.endereco.cidade}/${cliente.endereco.estado}\n`;
      resultado += `Telefones:\n`;
      cliente.telefones.forEach(tel => {
        resultado += `  - (${tel.ddd}) ${tel.numero}\n`;
      });
      clienteIndex++;
    });

    return resultado;
  }
}

console.log("=== TESTE DA R3: Sistema de Empresa com Classes ===\n");

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

console.log("\n=== TESTE DE MÉTODOS UPPER/LOWER ===");
console.log(`Nome Fantasia Upper: ${empresa.getNomeFantasiaUpper()}`);
console.log(`Razão Social Lower: ${empresa.getRazaoSocialLower()}`);
console.log(`Cliente 1 Nome Upper: ${cliente1.getNomeUpper()}`);
console.log(`Estado da Empresa Upper: ${enderecoEmpresa.getEstadoUpper()}`);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Telefone,
    Endereco,
    Cliente,
    Empresa
  };
}
