Atividade 1 

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// Matheus Nachtergaele
// Virginia Cavendish

Atividade 2 

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// false
// undefined

Atividade 3 

// a = 
const pessoa = {
    nome: "Vitor Hugo",
    apelidos: ["Vitinho", "Vitão", "Vit"]
}
function imprimirMensagem(objeto) {
    const { nome, apelidos } = objeto;
    const mensagem = `Eu sou ${nome}, mas pode me chamar de: ${apelidos.join(", ")}`;
    console.log(mensagem);
}
imprimirMensagem(pessoa);


// b = 
const novaPessoa = { ...pessoa, apelidos: ["Huguinho", "Hugo", "VH"] };
imprimirMensagem(novaPessoa);

Atividade 3 


// Criando dois objetos diferentes
const pessoa1 = {
    nome: "Alice",
    idade: 30,
    profissao: "Engenheira"
};

const pessoa2 = {
    nome: "Bob",
    idade: 25,
    profissao: "Professor"
};


// Escrevendo a função
function getInfo(objeto) {
    const { nome, idade, profissao } = objeto;
    return [
        nome,
        nome.length,
        idade,
        profissao,
        profissao.length
    ];
}


Atividade 4

let carrinho = [];

const fruta1 = {
    nome: "Maçã",
    disponibilidade: true
};

const fruta2 = {
    nome: "Banana",
    disponibilidade: true
};

const fruta3 = {
    nome: "Laranja",
    disponibilidade: true
};

function adicionarAoCarrinho(fruta) {
    carrinho.push(fruta);
}
adicionarAoCarrinho(fruta1);
adicionarAoCarrinho(fruta2);
adicionarAoCarrinho(fruta3);

console.log(carrinho);

