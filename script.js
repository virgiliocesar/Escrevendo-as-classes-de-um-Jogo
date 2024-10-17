class Heroi {
  // Construtor da classe
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar
  atacar() {
    let ataque = "";

    // Estrutura de decisão para definir o tipo de ataque
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "realizou um ataque desconhecido";
        break;
    }

    // Exibir a mensagem de ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}
// Função para criar heróis e realizar ataques
function iniciarAventura() {
  const herois = [
    new Heroi('Gandalf', 2000, 'mago'),
    new Heroi('Conan', 30, 'guerreiro'),
    new Heroi('Bruce Lee', 32, 'monge'),
    new Heroi('Naruto', 17, 'ninja')
  ];

  // Laço de repetição para fazer cada herói atacar
  for (let i = 0; i < herois.length; i++) {
    herois[i].atacar();
  }
}

// Variáveis e chamada da função
const iniciar = true;
if (iniciar) {
  iniciarAventura();
} else {
  console.log('A aventura não começou.');
}
