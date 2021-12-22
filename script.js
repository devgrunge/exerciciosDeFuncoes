// exercicio 1

//let total = 0

//const sum = function (number1, number2) {
//  let total = number1 + number2
//  return total
//}

//let number1 = 35
//let number2 = 25

//console.log(`O número 1 é ${number1}`)
//console.log(`O número 2 é ${number2}`)
//console.log(`A soma dos dois itens é ${sum(number1, number2)}`)

//console.log(total)

//---------------------------------------------------------
//exercicio 2

//function fazerSuco(fruta1, fruta2) {
//return 'suco de :' + fruta1 + fruta2
//}

//const copo = fazerSuco('bana', 'maçã')

//console.log(copo)

//----------------------------------------------------------

//exercicio 3

//let subject = 'create video'

//function createThink() {
//subject = 'study'
//return subject
//}

//console.log(subject)
//createThink()

//----------------------------------------------------------

//exercicio 4
//function hoisting e arrow function

//const sayMyName = name => {
//console.log(name)
//}

//sayMyName('mayk')

//----------------------------------------------------------

//exercicio 5
// callback functions

//function sayMyName(name) {
//console.log('antes de executar')
//name()
//console.log('depois de executar')
//}

//sayMyName(() => {
//console.log('isso é um callback')
//})

//----------------------------------------------------------

//exercicio 6
//função construtora

//function Person(name) {
  //this.name = name
  //this.walk = function () {
    //return this.name + " está andando"
  //}
//}
//const mayk = new Person("mayk")
//const joao = new Person("João")
//console.log(mayk.walk())

//--------------------------------------------------------------

/* 
Exercício 1 Prototype


# Prototype

* Prototype-based language
* Prototype chain
* __proto__ 

# Type conversion (Typecasting) Vs coersion

* Alteração de um tipo de dado para outro tipo

ex: 
console.log('9' + 5)

* Normalmente o js concatenaria os números e teriamos um resultado parecido com "95".

* Precisamos então fazer com que o Js interprete a nossa string como número.

ex: console.log(Number('9') + 5)

* Dessa forma a soma seria feita normalmente , tendo assim o resultado como "14".



console.log( Number('9') + 5)

*/

//---------------------------------------------------------------

/* Exercicio 2 Srings em números

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

*/
//----------------------------------------------------------------

/* Exercício 3 Contando caracteres e digitos

let word = "paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)
*/

//------------------------------------------------------------------

/* Exercicio 4 Casas decimais
let number = 345.3334544
console.log(number.toFixed(2).replace("." , ","))
Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula */


//-------------------------------------------------------------------
/* Exercicio 5 Maiúsculas e minúsculas

let word = "programar é muito bom"

console.log(word.toLowerCase())

*/

//-------------------------------------------------------------------


/* Exercicio 6 separando Strings

let phrase = "Eu odeio trabalhar"
let myArray = phrase.split(" ")
let prasheWithUnderScore = myArray.join("_")
console.log(prasheWithUnderScore.toUpperCase())
//console.log(myArray)

*/

//---------------------------------------------------------------------
/* 
Exercicio 7 Encontrando palavras em frases
A função protótipo "include('')" verifica se a string armazenada possui
uma informação específica , como no exemplo abaixo:
Obs:. O includes() é case sensitive
let phrase = "Eu quero viver o amor"
console.log(phrase.includes("amor"))
*/

//---------------------------------------------------------------------

/* 
Exercicio 8 Criando array contrutor 
é possível criar um array com posições vazias através do comando 
ex:. let myArray= new Array(10)


let myArray = new Array('a' , 'b' , 'c')
console.log(myArray)

*/

//----------------------------------------------------------------------
/* 
Exercicio 9 Contando elementos do array
Através do protótipo .length() podemos contar os elementos de 
um array e usando "[]" após o fim do array como no exemplo , podemos 
acessar/ver a posiçao digitada

console.log(["a" ,{type: 'aloum'} , function () {
  return "alo"
} ][2])

*/

//-----------------------------------------------------------------------
/* 
Exercicio 10 Transformar cadeia de caracteres em elementos de um array 
O próprio "Array" já é um objeto com variás opções de função protótipo 
disponiveis , para separar a string e um array com uma posição para cada
caracter , utilizaremos o método .from()

let word = "manipulação"
console.log(Array.from(word)[8])

*/

//------------------------------------------------------------------------
/* 
Exercicio 11 Manipulando Arrays

//let techs = ["html" , "javascript" , "css"]
//adicionar um item no fim da fila
//techs.push('react')
//adicionar no começo
//techs.unshift('nodejs')
//remover do fim
//techs.pop()
//remover do começo
//techs.shift()
//pegar somente alguns elementos predeterminados do array
//console.log(techs.slice(1 , 3))
//remover 1 ou mais itens em qualquer posição do array
//techs.splice(1 ,1)
//encontrar a posição de um elemento no array
//let index = techs.lastIndexOf("html") 
//techs.splice(index , 1)
//console.log(techs)

*/






