let a = true
let b = false 
let c = true

console.log(a&&b)
console.log(b&&c)
console.log(a&&c)
console.log(a&&b&&c)

console.log(a||b)
console.log(b||c)
console.log(a||c)
console.log(a||b||c)

let nome;
let idade;

// Perguntar ao usuário seu nome
nome = prompt("Qual é o seu nome?");

// Perguntar ao usuário sua idade e converter para número
idade = prompt("Qual é a sua idade?");

// Imprimir a mensagem na tela
console.log("Olá " + nome + ", você tem " + idade + " anos.");