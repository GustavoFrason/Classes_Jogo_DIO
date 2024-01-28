class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque genérico';
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Chamadas
  const heroiMago = new Heroi('Merlin', 100, 'mago');
  heroiMago.atacar();
  
  const heroiGuerreiro = new Heroi('Conan', 35, 'guerreiro');
  heroiGuerreiro.atacar();
  
  const heroiMonge = new Heroi('Bruce Lee', 45, 'monge');
  heroiMonge.atacar();
  
  const heroiNinja = new Heroi('Hattori Hanzo', 30, 'ninja');
  heroiNinja.atacar();
  