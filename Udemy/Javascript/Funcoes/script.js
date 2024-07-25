function minhaFuncao(){
    console.log("Olá, Mundo!")
}

minhaFuncao();

let m = 10 

function escopoAninhado(){
    let m = 20;
    if(true){
        let m = 30;
        if(true){
            let m = 40;

            console.log(m);
        }
        console.log(m);
    }

    console.log(m);

}

// arrow function

const testeArrow = () => {
    console.log("Esta é uma arrow function")
}
n = 4
const parOuImpar = () => {
    if (n % 2 === 0){
        return "Par"
    } else{
        return "Impar"
    }
}

const multiplication = function(m,n){
    if (n === undefined){
        return m * 2
    }
    else{
        return m * n
    }
}

//console.log(multiplication(5))
//console.log(multiplication(2,4))

const greeting = (name) => {
    if(!name){
        console.log("olá")
        return
    }
    console.log(`Olá ${name}`)
}

//greeting("Joao")

const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`
}

console.log(customGreeting("Matheus"))
console.log(customGreeting("João", "Bom dia"))

const repeatText = (text, repeat = 2) => {
    for(let i=0; i< repeat; i++){
        console.log(text)
    }
}

repeatText('Ola')
repeatText('Oiie', 5)

//Closure - conjunto de funções onde temos um reaproveitamento do escopo interno de uma função.

function someFunction(){
    let txt = "Alguma coisa"

    function display(){
        console.log(txt)
    }

    display();
}

someFunction();

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1(5))
console.log(c2(10))