// DATA
const data = [
    {
        min: 0,
        max: 18.4,
        classification: "Menor que 18,5",
        info: "Magreza",
        obesity: "0",
    },
    //seguir este padrão acima para fazer o restante do IMC:
    {
        min: 18.5,
        max: 24.9,
        classification: "Entre 18,5 e 24,9",
        info: "Normal",
        obesity: "0",
    },
    {
        min: 25,
        max: 29.9,
        classification: "Entre 25 e 29,9",
        info: "Sobrepeso",
        obesity: "I",
    },
    {
        min: 30,
        max: 39.9,
        classification: "Entre 30 e 34,9",
        info: "Obesidade",
        obesity: "II",
    },   
    {
        min: 40,
        max: 99,
        classification: "Maior que 40",
        info: "Obesidade grave",
        obesity: "III",
    },   
];

// PEGANDO OS ELEMENTOS: 
const imcTable = document.querySelector("#imc-table");
const altura = document.querySelector("#height");
const peso = document.querySelector("#weight");
const calcBtn = document.querySelector("#calc-btn");
const clearBtn = document.querySelector("#clear-btn");
const backBtn = document.querySelector("#back-btn");
const imcNumber = document.querySelector("#imc-number");
const imcInfo = document.querySelector("#imc-info span");
const calcContainer = document.querySelector("#calc-container");
const resultContainer = document.querySelector("#result-container");


// FUNÇÕES:
function createTable(data){
    data.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("table-data");

        const classification = document.createElement("p");
        classification.innerHTML = item.classification;

        const info = document.createElement("p");
        info.innerHTML = item.info;
        
        const obesity = document.createElement("p");
        obesity.innerHTML = item.obesity;

        //incluindo cada constante criada na div criada
        div.appendChild(classification);
        div.appendChild(info);
        div.appendChild(obesity);

        imcTable.appendChild(div);
    });
}

function cleanInput() {
    altura.value = "";
    peso.value = "";
}

function validDigital(text){
    return text.replace(/[^0-9,]/g, "")
}

function Calcimc(heigth, weight){
    const imc = weight / (heigth * heigth).toFixed(2);
    return imc;
}

function showOrHideResult(){
    calcContainer.classList.toggle("hide");
    resultContainer.classList.toggle("hide");
    //toggle faz:
    //se a div calc-container estiver com a classe hide, ela vira visible e vice versa
    //toggle é uma função que adiciona ou remove uma ou mais classes de um elemento HTML
    //toggle é útil para mostrar e esconder conteúdos com CSS, como dropdown menus ou modais
}

// INICIALIZAÇÃO
createTable(data);

// EVENTOS:

[altura, peso].forEach((el)=>{
    //el - elemento (altura e peso), fica aguardando input, caso tenha uma mudança, ele guarda em 'e' e o utiliza para validar se é algo diferente de número.
    el.addEventListener("input", (e) => {
        const updatedValue = validDigital(e.target.value);
        //chama a função valid digital, onde se for algo diferente de números, retorna vazio
        e.target.value = updatedValue;
        //o e que no caso é o input, fica vazio caso seja algo diferente de número.
    });
});

calcBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const alturaValue = altura.value.replace(",",".");
    const pesoValue = peso.value.replace(",",".");
    if(!alturaValue || !pesoValue) return;
    const imc = Calcimc(alturaValue, pesoValue);

    let info;
    data.forEach((item) => {
        if (imc >= item.min && imc<= item.max){
            info = item.info;
        }
    });
    if (!info) return;

    imcNumber.innerText = imc.toFixed(2);
    imcInfo.innerText = info;

    switch (info) {
        case "Magreza":
            imcNumber.classList.add("low");
            imcInfo.classList.add("low");
            break;
        case "Normal":
            imcNumber.classList.remove("good");
            imcInfo.classList.remove("good");
            break;
        case "Sobrepeso":
            imcNumber.classList.add("low");
            imcInfo.classList.add("low");
            break;
        case "Obesidade":
            imcNumber.classList.add("medium");
            imcInfo.classList.add("medium");
            break;
        case "Obesidade grave":
            imcNumber.classList.add("high");
            imcInfo.classList.add("high");
            break;
    }

    showOrHideResult();

});

clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    cleanInput();
});

//Evento backBtn:

backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    cleanInput();
    showOrHideResult();
});