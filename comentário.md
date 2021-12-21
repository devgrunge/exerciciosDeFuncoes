# criar um aplicativo de frases motivacionais

declaration - declaração da função
function statement
function createPhrases () {

}

# Chamando a função

executar a função
rodar , chamar , invocar
execute , run , call , invoke

A função pode ser utilizada varias vezes "reutilizada"

A função também tem a "função" (rss) de dar nome à um bloco de código específico.

# Function expression ou Função anônima e Parametros

ex:
const sum = function (number1 , number2 ){
console.log(numer1 + number2)

}

sum(2,3) ---> Arguments / argumentos
Toda função sempre retorna alguma coisa!
se não tiver o "return" na função , ela vai retornar

# undefined

return ---> retorna algum dado dentro da função , ou seja, o "return" lê somente o dado especificado dentro da função.

# no escopo da função , a váriavel é isolada!

uma outra maneira de entender funções , seria a de um comando que permite que voce ponha dados nele e após isso tenha eles transformados retornado pra você

ex:

function fazerSuco(fruta1, fruta2) {
return fruta1 + fruta2
}

const copo = fazerSuco('Banana', 'maçã')

console.log(copo)

# Function hoisting

quando uma função é ativada antes de ser descrita , o motor do js faz a sobreposição da função
ex:

sayMyName()

function sayMyName(){
console.log('mayk')

}

funções feitas como expressões não sofrem hoisting
ex : const sayMyName() {}

# só funções do tipo statement/declaration sofrem hoisting

# Um jeito de mais compacto de declarar funções do tipo expression

A arrow function não sofre hoisting!!

ex: const sayMyName = () => {
console.log('mayk')
}

sayMyName()

Geralmente é atribuida uma constante(const) numa arrow function , mas , não sendo uma regra obrigatória

# Callback Function

são funções passadas como parametros para outra função

ex: function sayMyName(name) {
console.log(name)
}

sayMyName(() => {
console.log('isso é um callback')
})

# Função construtora
É uma boa prática começar funções construtoras com letra maiúscula!
É basicamente um molde para criar objetos
Expressão new
cria um objeto
this keyword

ex: function Person(name) {
this.name = name
}
const mayk = new Person('mayk')
const joao = new Person('João')
console.log(mayk, joao)
