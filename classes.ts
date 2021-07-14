// As classes dentro do typescript possuem encapsulamento de métodos diferente do javascript
//
class Data {
  public dia: number;
  private mes: number;
  ano: number;

  // como definimos um valor default nos parametros de classe? Podemos passar o valor direto no construtor
  constructor(dia: number, mes: number, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

class Data2 {
  // como definimos um valor default nos parametros de classe? Podemos passar o valor direto no construtor
  constructor(
    public dia: number,
    public mes: number,
    public ano: number = 1970
  ) {}
}

class Carro {
  private velocidadeAtual: number = 0;
  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 120
  ) {}
  // para alterar um atributo privado, usaremos

  private alterarVelocidade(delta: number) {
    const novaVelocidade = this.velocidadeAtual + delta;

    if (this.velocidadeAtual >= 0 && novaVelocidade <= this.velocidadeMaxima) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }
    //   VALIDAR CALCULOS PARA ACELERAÇÃO OU FRENAGEM
    //  this.velocidadeAtual = XXX
    // const aceleracao = 5;
    // if(this.velocidadeAtual + aceleracao <= this.velocidadeMaxima){
    //     this.velocidadeAtual += aceleracao;
    // }
  }
  acelerar() {
    this.alterarVelocidade(10);
  }

  frear() {
    this.alterarVelocidade(-10);
  }
}
const carro = new Carro("Ford", "Mustang");
carro.acelerar();

const data = new Data(8, 6, 2002);
console.log(data.dia);

const data2 = new Data(1, 1);

// HERANÇA

class Camaro extends Carro {
  private turbo = false;
  constructor() {
    //   AO usar o super, estamos instanciando a classe pai
    super("Chevrolet", "Camaro", 500);
  }

  ligarTurbo() {
    this.turbo = true;
  }
}

const camaro = new Camaro();

camaro.acelerar();
camaro.frear();
camaro.ligarTurbo()
