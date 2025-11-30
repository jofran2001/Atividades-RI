class DescritorEmpresa {
  descrever(empresaObj) {
    console.log("=== DETALHES DA EMPRESA ===");
    console.log(`Razão Social: ${empresaObj.razaoSocial}`);
    console.log(`Nome Fantasia: ${empresaObj.nomeFantasia}`);
    console.log(`CNPJ: ${empresaObj.cnpj}`);
    console.log(`Endereço: ${empresaObj.endereco.rua}, ${empresaObj.endereco.numero} - ${empresaObj.endereco.bairro}, ${empresaObj.endereco.cidade}`);
    
    console.log("\n=== FUNCIONÁRIOS DA EMPRESA ===");
    
    empresaObj.funcionarios.forEach((funcionario, index) => {
      console.log(`\nFuncionário ${index + 1}:`);
      console.log(`  Nome: ${funcionario.nome}`);
      console.log(`  Matrícula: ${funcionario.matricula}`);
      console.log(`  CPF: ${funcionario.cpf}`);
      console.log(`  Endereço: ${funcionario.endereco.rua}, ${funcionario.endereco.numero} - ${funcionario.endereco.bairro}, ${funcionario.endereco.cidade}`);
      console.log(`  Telefone: (${funcionario.telefone.ddd}) ${funcionario.telefone.numero}`);
    });
  }
}

export default DescritorEmpresa;
