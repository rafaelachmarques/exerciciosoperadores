/*const bool1 = true
const bool2 = false
const bool3 = !bool2 // bool3 é true

let resultado = bool1 && bool2
console.log("a. ", resultado) // resultado é false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado) // true

console.log("d. ", typeof resultado) // boolean
///
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
const soma = primeiroNumero + segundoNumero
console.log(soma) // será impresso os números em string, não serão somados os números 
///

let primeiroNumero1 = Number(prompt("Digite um número!"))
let segundoNumero2= Number(prompt("Digite outro número!"))
const soma2 = primeiroNumero1 + segundoNumero2
console.log(soma2)
///

const nome = Number(prompt("Qual é a sua idade?"));
const nomeAmigo = Number(prompt("Qual é a idade do seu amigo?"));
console.log("Sua idade é maior do que a do seu melhor amigo?", nome > nomeAmigo);
console.log("A diferença das idades é", nome-nomeAmigo);
///

const par = Number(prompt("digite um número par"));
console.log(par%2); // todos os números pares vão dar 0
///

const idade = Number(prompt("Quantos anos você tem?"));
console.log(idade * 12, "meses");
console.log(idade * 365, "dias");
console.log(idade * 8766, "horas");
///

const n1 = Number(prompt("digite um número"));
const n2 = Number(prompt("digite outro número"));
console.log("O primeiro numero é maior que o segundo?"", n1>n2)
console.log("O primeiro numero é igual ao segundo?", n1==n2)
console.log("O primeiro numero é divisivel pelo segundo?", n1%n2 == 0)
console.log("O segundo numero é divisivel pelo primeiro?", n2%n1 ==0)*/
///

//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

///

// a) Calcule e mostre o valor de 77°F em K, mostrando a unidade no console também.
KELVIN = (77 - 32)*(5/9) + 273.15
console.log("77 F° são", KELVIN, "kelvin")
///

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
GRAUS_FAHRENHEIT = 80*(9/5) + 32
console.log("80 °C são", GRAUS_FAHRENHEIT, "fahrenheit")
///

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também 
novoFahrenheit = 30*(9/5) + 32
console.log("30 °C são", novoFahrenheit, "fahrenheit");
KELVIN2 = (novoFahrenheit - 32)*(5/9) + 273.15
console.log(`${novoFahrenheit} °F são ${KELVIN2} kelvin`)
///

// d) Altere o último item para que o usuário insira o valor em graus celsius que ele deseja converter
novo
novoFahrenheit = 30*(9/5) + 32
console.log("30 °C são", novoFahrenheit, "fahrenheit");
KELVIN2 = (novoFahrenheit - 32)*(9/5) + 273.15
console.log(`${novoFahrenheit} °F são ${KELVIN2} kelvin`)



