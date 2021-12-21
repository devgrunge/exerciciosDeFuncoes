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

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + " está andando"
  }
}
const mayk = new Person("mayk")
const joao = new Person("João")
console.log(mayk.walk())
