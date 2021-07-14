// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 0;
const avaliacao: number = 4.5;

// String
const nome: string = "Matheus";

// Array
// necessário especificar qual o tipo dos elementos dentro do array na declaração.
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [10, 11, 2];

// Tuple
// tipo parecido com array; definimos que tipo teremos em cada posição do array
let jogadores: [string, string, string];
jogadores = ["Lucas", "Matheus", "Nilo"];

// Enum
// conseguimos definir alguns valores e utilizá-los como objetos.
enum StatusAprovacao {
  Aprovado,
  Pendente,
  Rejeitado,
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
// usamos any quando não sabemos quais serão os tipos que . Não é recomendado utilizar muuito; ponderar seu uso
const retornoDaApi: any[] = [123, "oi", true];

const retornoDaApi2: any = {
  // ....
};

//  Void
// O tipo void é definido quando uma função não retorna nada
function printarTela(msg: string): void {
  console.log(msg);
}

// Null e Undefined

const u: undefined = undefined;
const n: null = null;

// Object
// é um tipo não-primitivo
function criar(objeto: object) {
  // ;...
}
criar({
  propriedade: 1,
});

// criar('Vitor')  //  dá erro

// Never
// a função é do tipo NEVER pois nunca termina. Se entrar no loop, nunca vai sair. É um tipo que nunca ocorre.
function loopInfinito(): never {
  while (true) {}
}

// Never é usada para erros tambem
function erro(mensagem: string): never {
  throw new Error(mensagem);
}

function falha(): never {
  return erro("Algo falhou");
}
//  A função falha, é dita como tipo never pois dentro dela há o uso de outra função never

// Union Types
// Com isso, podemos definir mais de um tipo para uma variável.
function exibirNota(nota: number | string) {
  console.log(`A nota é ${nota}`);
}
exibirNota("10");

// Alias
// Cria atalhos para os tipos;

type Funcionario = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
};
// type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [
  {
    nome: "",
    sobrenome: "",
    dataNascimento: new Date(),
  },
];

function tratarFuncionarios(funcionarios: Funcionario[]) {
  for (let funcionario of funcionarios) {
    console.log(`Nome funcionario ${funcionario.nome}`);
  }
}

let altura: number | null = 1.65;
altura = null;

type Contato = {
  nome: string;
  telefone: number;
  telefone2?: number;
};

//  AO colocar o ponto de interrogação, dizemos ao typescript que é um campo opcional. Ou seja, se não tiver nada, ele será undefined
const contato : Contato = {
    nome: 'Matheus',
    telefone: 997957911
}

// Type Assertion
// Dizer qual o tipo de uma variavel em determinado momento. Ex: pegar um elemento html
const minhaIdade : any = 23;
(minhaIdade as number).toString();
// ou
(<number>minhaIdade).toString

const input = document.getElementById('numero1') as HTMLInputElement;
console.log(input.value);
