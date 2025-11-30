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

export { Telefone, Endereco, Cliente, Empresa };
