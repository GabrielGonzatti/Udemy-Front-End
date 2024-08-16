const listaPessoa = [2,94,5,21]

console.log(listaPessoa.length)


// const obj = {
//     a: "teste",
//     b: True
// }
// console.log(obj instanceof Object)

// const obj2 = {
//     c: []
// }
// Object.assign(obj2, obj);

//COPIANDO OUTRO OBJETO

// loop

const users = ["Matheus", "João", "Pedro", "Miguel"];

for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário ${users[i]}`)
}

const lista = ['a', 'b', 'c'];
console.log(lista)
lista.push('d'); //adiciona
console.log(lista)
lista.pop(); //remove 

const letters = ['a', 'b', 'c'];
console.log(letters)
const letter = letters.shift() 
//O método shift remove o elemento de índice zero, diminui em 1 os indices dos demais valores e retorna o valor removido. Se a propriedade length for 0, então undefined é retornado. 

//O método unshift() adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length ) atualizado.
console.log(letter)

// **indexOf** nos permite encontrar o índice do elemento através do argumento.

// **lastIndexOf** É utilizado para ver de traz para frente o índice que você deseja através do argumento.

const myElements = ["Morango","Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Abacate"));
console.log(myElements.lastIndexOf("Abacate"));

// SLICE

const testeSlice = ["a", "b", "c", "d"];

const subArray = testeSlice.slice(2,4);

console.log(testeSlice);
console.log(subArray);

// **forEach**

myElements.forEach(element => {
    console.log(element);
    //Explicação do ForEach:
    //forEach é uma função nativa do JavaScript que permite iterar sobre cada elemento de um array e executar uma função para cada um deles.
    //A função forEach não modifica o array original.
    //O forEach não retorna nenhum valor.

});

// INCLUDES

console.log(myElements.includes("Morango"));
console.log(myElements.includes("Banana"));
//O método includes() retorna true se o elemento está presente no array, caso contrário retorna false - Basicamente é um "Está incluso?"
if(myElements.includes("Morango")){
    console.log("Morango está na lista");
}else{
    console.log("Morango não está na lista");
}
//REVERSE

console.log(myElements.reverse());

//MÉTODOS DE STRING

const nome = "Matheus";
console.log(nome.length); // Retorna o comprimento da string
console.log(nome.toUpperCase()); // Retorna a string em letras maiúsculas
console.log(nome.toLowerCase()); // Retorna a string em letras minúsculas
console.log(nome.charAt(0)); // Retorna o caractere na posição especificada

// Trim

const testeTrim = "   Ola   ";
console.log(testeTrim.trim()); // Remove os espaços em branco no início e no fim da string

// Split

const frase = "Ola, como você está?";

const palavras = frase.split(", ");

console.log(palavras);

//padstart

const nomeCompleto = "Matheus";

console.log(nomeCompleto.padStart(10, "-")); // Retorna a string com um prefixo de caracteres adicionados à esquerda

// Retorna a string com um prefixo de caracteres adicionados à esquerda

//padEnd

const nomeCompleto2 = "Matheus";

console.log(nomeCompleto2.padEnd(10, "-")); // Retorna a string com um sufixo de caracteres adicionados à direita

// Retorna a string com um sufixo de caracteres adicionados à direita

//Join

const nomes = ["Matheus", "João", "Pedro"];

console.log(nomes.join(", ")); // Retorna uma string com os elementos do array separados por um separador especificado

// Retorna uma string com os elementos do array separados por um separador especificado

//repeat

console.log("Hello ".repeat(5)); // Retorna uma string repetida a quantidade especificada

//JOIN

const fraseDenovo = palavras.join(" ")

console.log(fraseDenovo); // Retorna uma string com os elementos do array separados por um separador especificado

const itensParaComprar = ['Mouse', 'Teclado', 'Monitor'];
const fraseItensComprar = `Precisamos de comprar: ${itensParaComprar.join(', ')}`
console.log(fraseItensComprar)

//REPEAT REVIEW

const palavra = "Testando ";
console.log(palavra.repeat(5))

//REST OPERATOR / REST PARAMETERS
//REST OPERATOR É: 
    // É utilizado quando você deseja passar um número variável de argumentos para uma função.
    // O operador rest permite que você recebam um array de argumentos para a função.

const somaInfinita = (...arg) => {
    let total = 0;
    for (let i = 0; i < arg.length; i++) {
        total += arg[i];
    }
    return total;
};

console.log(somaInfinita(1,2,3));

console.log(somaInfinita(1,20,19));

//FOR OF

const arrayNumeros = (...args) => {
    let total = 0;

    for(num of args){
        //grava em num cada item de args [1,2,3,4,5]
        total += num;

    }
};

console.log(arrayNumeros(1,2,3,4,5));

//DESTRUCTURING em objetos

const pessoa = {
    primeiro_nome: "Matheus",
    idade: 25,
    endereco: {
        rua: "Rua dos Bobos",
        numero: 123,
    }
};

const {primeiro_nome, idade, endereco} = pessoa;

console.log(primeiro_nome, idade, endereco);

//renomear variaveis 
const {primeiro_nome: primeiroNome} = pessoa;

console.log(primeiroNome);

//DESTRUCTURING em arrays

const myList = ["Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

//JSON:

const pessoaJson = '{"nome": "Matheus", "idade": 25, "endereco": {"rua": "Rua dos Bobos", "numero": 123}}';

const pessoaParseada = JSON.parse(pessoaJson);

console.log(pessoaParseada);

//convertendo to JSON

const pessoaConvertida = JSON.stringify(pessoaParseada);

console.log(pessoaConvertida);

//TRY/CATCH