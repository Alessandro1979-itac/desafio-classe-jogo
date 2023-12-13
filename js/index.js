class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atakar() {
    let ataque = "";

    switch (this.tipo) {
      case "Mago":
        ataque = "Magia";
        break;
      case "Guerreiro":
        ataque = "Espada";
        break;
      case "Monge":
        ataque = "Artes Marciais";
        break;
      case "Ninja":
        ataque = "Shuriken";
        break;
      default:
        ataque = "Atacou";
    }

    console.log(`O ${this.nome}, ${this.tipo} atacou usando ${ataque}`);
  }
}

const hero1 = new Hero("Aragorn", 35, "Guerreiro");
const hero2 = new Hero("Gandalf", 1500, "Mago");
const hero3 = new Hero("Godofredo", 55, "Monge");
const hero4 = new Hero("Naruto", 1500, "Ninja");

hero1.atakar();
hero2.atakar();
hero3.atakar();
hero4.atakar();
