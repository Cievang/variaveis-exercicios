//Construa um programa, seguindo as instruções abaixo:

//a) Declare uma variável para armazenar um nome, sem atribuir um valor a essa variável.

//const  nome 

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor a essa variável.

//let idade

//c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.

//console.log (typeof nome)
//console.log (typeof idade)

//d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

// R: Foi impresso undefined pois não foi atribuído nenhum valor às variáveis.

//e) Depois, disso, atualize o código para perguntar ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

//const nome = (prompt ('Qual seu nome?'))
//let idade  = (prompt ('Qual sua idade?'))

//console.log (nome)
//console.log ( idade)

//console.log (typeof nome)
//console.log (typeof idade)

//f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

//  R: Notei que ambas vieram como string. Isso ocorre porque o tipo de um prompt sempre será STRING.

//console.log ('Olá,',nome, 'você tem', idade, 'anos')


//Parte 2
//Agora vamos criar 3 perguntas com valores de Sim ou Não.

//Siga as instruções abaixo:

//a) Crie um programa que faça 3 perguntas para o usuário através do prompt. Armazene a resposta de cada pergunta em uma variável.

const respostaA = (prompt ('Você tem filhos?'))
const respostaB = (prompt ('Você sabe nadar?')) 
const respostaC = (prompt('Você é vegetariano?'))

//b) Imprima no console todas as respostas.

//console.log (respostaA)
//console.log (respostaB)
//console.log (respostaC)

//c) Altere seu programa para que os textos das perguntas sejam armazenados em 3 variáveis diferentes.
//d) Troque o texto do seu prompt pelas variáveis que contêm as perguntas.

const perguntaA =  ('Você tem filhos?')
const perguntaB = ('Você sabe nadar?')
const perguntaC = ('Você é vegetariano?')

//e) Altere o console para imprimir a pergunta e a resposta.

console.log (perguntaA, respostaA)
console.log (perguntaB, respostaB)
console.log (perguntaC, respostaC)
