import Funcionario from './funcionario.js';
import Endereco from './endereco.js';

class Empresa {
  constructor(funcionarios, endereco, razaoSocial, nomeFantasia, cnpj) {
    this.funcionarios = funcionarios;
    this.endereco = endereco;
    this.razaoSocial = String(razaoSocial);
    this.nomeFantasia = String(nomeFantasia);
    this.cnpj = String(cnpj);
  }
}

export default Empresa;
