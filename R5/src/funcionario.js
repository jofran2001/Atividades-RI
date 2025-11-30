import Endereco from './endereco.js';
import Telefone from './telefone.js';

class Funcionario {
  constructor(nome, matricula, cpf, endereco, telefone) {
    this.nome = String(nome);
    this.matricula = String(matricula);
    this.cpf = String(cpf);
    this.endereco = endereco;
    this.telefone = telefone;
  }
}

export default Funcionario;
