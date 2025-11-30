function criarPersonagem({ nome, codinome, armaPrincipal, armaSecundaria, velocidade, forca, resistencia }) {
  const clamp = (n) => Math.max(0, Math.min(100, Number(n)));
  return {
    nome: String(nome),
    codinome: String(codinome),
    armaPrincipal: String(armaPrincipal),
    armaSecundaria: String(armaSecundaria),
    velocidade: clamp(velocidade),
    forca: clamp(forca),
    resistencia: clamp(resistencia),
    descricao() {
      return `Nome: ${this.nome}\nCodinome: ${this.codinome}\nArma Principal: ${this.armaPrincipal}\nArma Secundária: ${this.armaSecundaria}\nVelocidade: ${this.velocidade}\nForça: ${this.forca}\nResistência: ${this.resistencia}`;
    },
  };
}

const capitaoAmerica = criarPersonagem({
  nome: "Steve Rogers",
  codinome: "Capitão América",
  armaPrincipal: "Escudo de Vibranium",
  armaSecundaria: "Combate corpo a corpo",
  velocidade: 70,
  forca: 75,
  resistencia: 80,
});

const homemDeFerro = criarPersonagem({
  nome: "Tony Stark",
  codinome: "Homem de Ferro",
  armaPrincipal: "Armadura Mark (repulsores)",
  armaSecundaria: "Mísseis guiados",
  velocidade: 85,
  forca: 85,
  resistencia: 90,
});

const hulk = criarPersonagem({
  nome: "Bruce Banner",
  codinome: "Hulk",
  armaPrincipal: "Força bruta",
  armaSecundaria: "Salto e impacto",
  velocidade: 60,
  forca: 100,
  resistencia: 100,
});

const thor = criarPersonagem({
  nome: "Thor Odinson",
  codinome: "Thor",
  armaPrincipal: "Mjölnir/Stormbreaker",
  armaSecundaria: "Poderes elétricos",
  velocidade: 80,
  forca: 95,
  resistencia: 95,
});

const viuvaNegra = criarPersonagem({
  nome: "Natasha Romanoff",
  codinome: "Viúva Negra",
  armaPrincipal: "Pistolas/Batons de choque",
  armaSecundaria: "Artes marciais",
  velocidade: 75,
  forca: 55,
  resistencia: 70,
});

const gaviaoArqueiro = criarPersonagem({
  nome: "Clint Barton",
  codinome: "Gavião Arqueiro",
  armaPrincipal: "Arco e flechas especiais",
  armaSecundaria: "Combate corpo a corpo",
  velocidade: 70,
  forca: 60,
  resistencia: 65,
});

const thanos = criarPersonagem({
  nome: "Thanos",
  codinome: "Titã Louco",
  armaPrincipal: "Força e habilidade de combate",
  armaSecundaria: "Espada dupla",
  velocidade: 85, // sobre-humano
  forca: 98, // enorme força sem joias
  resistencia: 98, // enorme durabilidade
});

const personagens = [
  capitaoAmerica,
  homemDeFerro,
  hulk,
  thor,
  viuvaNegra,
  gaviaoArqueiro,
  thanos,
];

function compararAtributos(p1, p2) {
  const atributos = ["velocidade", "forca", "resistencia"];
  const resultados = [];

  for (const atributo of atributos) {
    const a = p1[atributo];
    const b = p2[atributo];
    let vencedor;
    if (a > b) {
      vencedor = `${p1.codinome} vence em ${atributo} (${a} > ${b})`;
    } else if (b > a) {
      vencedor = `${p2.codinome} vence em ${atributo} (${b} > ${a})`;
    } else {
      vencedor = `Empate em ${atributo} (${a} = ${b})`;
    }
    resultados.push(vencedor);
  }
  return resultados;
}

function imprimirComparacoes(personagens) {
  for (let i = 0; i < personagens.length; i++) {
    for (let j = i + 1; j < personagens.length; j++) {
      const p1 = personagens[i];
      const p2 = personagens[j];
      console.log("==============================");
      console.log(`${p1.codinome} vs ${p2.codinome}`);
      console.log("--- Descrição A ---");
      console.log(p1.descricao());
      console.log("--- Descrição B ---");
      console.log(p2.descricao());
      console.log("--- Resultados ---");
      const resultados = compararAtributos(p1, p2);
      for (const r of resultados) {
        console.log(r);
      }
      console.log("\n");
    }
  }
}

if (require.main === module) {
  imprimirComparacoes(personagens);
}

module.exports = { criarPersonagem, personagens, imprimirComparacoes, compararAtributos };
