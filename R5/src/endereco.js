class Endereco {
  constructor(numero, rua, bairro, cidade) {
    this.numero = Number(numero);
    this.rua = String(rua);
    this.bairro = String(bairro);
    this.cidade = String(cidade);
  }
}

export default Endereco;
