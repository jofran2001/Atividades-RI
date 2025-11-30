function TelefoneCelular(ddd, numero) {
  let _ddd = String(ddd);
  let _numero = String(numero);

  this.getDdd = function() {
    return _ddd;
  };

  this.setDdd = function(novoDdd) {
    _ddd = String(novoDdd);
  };

  this.getDddUpper = function() {
    return _ddd.toUpperCase();
  };

  this.getDddLower = function() {
    return _ddd.toLowerCase();
  };

  this.getNumero = function() {
    return _numero;
  };

  this.setNumero = function(novoNumero) {
    _numero = String(novoNumero);
  };

  this.getNumeroUpper = function() {
    return _numero.toUpperCase();
  };

  this.getNumeroLower = function() {
    return _numero.toLowerCase();
  };
}

function Endereco(estado, cidade, rua, numero) {
  let _estado = String(estado);
  let _cidade = String(cidade);
  let _rua = String(rua);
  let _numero = String(numero);

  this.getEstado = function() {
    return _estado;
  };

  this.setEstado = function(novoEstado) {
    _estado = String(novoEstado);
  };

  this.getEstadoUpper = function() {
    return _estado.toUpperCase();
  };

  this.getEstadoLower = function() {
    return _estado.toLowerCase();
  };

  this.getCidade = function() {
    return _cidade;
  };

  this.setCidade = function(novaCidade) {
    _cidade = String(novaCidade);
  };

  this.getCidadeUpper = function() {
    return _cidade.toUpperCase();
  };

  this.getCidadeLower = function() {
    return _cidade.toLowerCase();
  };

  this.getRua = function() {
    return _rua;
  };

  this.setRua = function(novaRua) {
    _rua = String(novaRua);
  };

  this.getRuaUpper = function() {
    return _rua.toUpperCase();
  };

  this.getRuaLower = function() {
    return _rua.toLowerCase();
  };

  this.getNumero = function() {
    return _numero;
  };

  this.setNumero = function(novoNumero) {
    _numero = String(novoNumero);
  };

  this.getNumeroUpper = function() {
    return _numero.toUpperCase();
  };

  this.getNumeroLower = function() {
    return _numero.toLowerCase();
  };
}

function Cliente(nome, telefoneCelular, email, endereco) {
  let _nome = String(nome);
  let _telefoneCelular = telefoneCelular;
  let _email = String(email);
  let _endereco = endereco;

  this.getNome = function() {
    return _nome;
  };

  this.setNome = function(novoNome) {
    _nome = String(novoNome);
  };

  this.getNomeUpper = function() {
    return _nome.toUpperCase();
  };

  this.getNomeLower = function() {
    return _nome.toLowerCase();
  };

  this.getTelefoneCelular = function() {
    return _telefoneCelular;
  };

  this.setTelefoneCelular = function(novoTelefone) {
    _telefoneCelular = novoTelefone;
  };

  this.getEmail = function() {
    return _email;
  };

  this.setEmail = function(novoEmail) {
    _email = String(novoEmail);
  };

  this.getEmailUpper = function() {
    return _email.toUpperCase();
  };

  this.getEmailLower = function() {
    return _email.toLowerCase();
  };

  this.getEndereco = function() {
    return _endereco;
  };

  this.setEndereco = function(novoEndereco) {
    _endereco = novoEndereco;
  };

  Object.defineProperty(this, 'descricao', {
    get: function() {
      const tel = _telefoneCelular;
      const end = _endereco;
      return `Nome: ${_nome}
Telefone: (${tel.getDdd()}) ${tel.getNumero()}
Email: ${_email}
Endereço: ${end.getRua()}, ${end.getNumero()} - ${end.getCidade()}/${end.getEstado()}`;
    }
  });
}

function ordenarClientesPorNome(arrayDeClientes) {
  return arrayDeClientes.slice().sort((a, b) => {
    const nomeA = a.getNome().toLowerCase();
    const nomeB = b.getNome().toLowerCase();
    if (nomeA < nomeB) return -1;
    if (nomeA > nomeB) return 1;
    return 0;
  });
}

console.log("=== TESTE DA R2: Objetos Cliente com Encapsulamento ===\n");

let telefone1 = new TelefoneCelular('11', '999999999');
let endereco1 = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987');
let cliente1 = new Cliente('Carlos Conrado Heinz', telefone1, 'carlos.conrado@app.com', endereco1);

let telefone2 = new TelefoneCelular('21', '988888888');
let endereco2 = new Endereco('RJ', 'Rio de Janeiro', 'Rua das Flores', '123');
let cliente2 = new Cliente('Ana Silva', telefone2, 'ana.silva@email.com', endereco2);

let telefone3 = new TelefoneCelular('31', '977777777');
let endereco3 = new Endereco('MG', 'Belo Horizonte', 'Av. Afonso Pena', '456');
let cliente3 = new Cliente('Bruno Costa', telefone3, 'bruno.costa@mail.com', endereco3);

let clientes = [cliente1, cliente2, cliente3];

console.log("--- Descrição do Cliente 1 ---");
console.log(cliente1.descricao);
console.log("\n");

console.log("--- Lista de Clientes (Ordem Original) ---");
clientes.forEach((c, i) => console.log(`${i + 1}. ${c.getNome()}`));
console.log("\n");

let clientesOrdenados = ordenarClientesPorNome(clientes);
console.log("--- Lista de Clientes (Ordenados Alfabeticamente) ---");
clientesOrdenados.forEach((c, i) => console.log(`${i + 1}. ${c.getNome()}`));
console.log("\n");

console.log("--- Teste de Métodos Upper/Lower ---");
console.log(`Nome Upper: ${cliente1.getNomeUpper()}`);
console.log(`Nome Lower: ${cliente1.getNomeLower()}`);
console.log(`DDD Upper: ${cliente1.getTelefoneCelular().getDddUpper()}`);
console.log(`Rua Upper: ${cliente1.getEndereco().getRuaUpper()}`);
console.log("\n");

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TelefoneCelular,
    Endereco,
    Cliente,
    ordenarClientesPorNome
  };
}
