// PROTOCOLOS DA WEB

// HTTP (Hypertext Transfer Protocol) - Protocolo de transferência de hipertexto

// HTTPS (Hypertext Transfer Protocol Secure) - Protocolo seguro de transferência de hipertexto

//SMTP é: 

    // Simple Mail Transfer Protocol
    // É o protocolo utilizado para enviar emails entre servidores de email.
//TCP É:

    // Transmission Control Protocol
    // É um protocolo utilizado para transmitir dados de um ponto para outro, garantindo a entrega dos dados sem erros.

//URL 

    // Uniform Resource Locator
    // É um endereço que identifica um recurso na web, como um arquivo, um site, um recurso dentro de um site.

//DNS 

    // Domain Name System
    // É um sistema de nomes de domínio que mapeia nomes de domínio para endereços IP.

// HTML

    // HyperText Markup Language
    // É uma linguagem de marcação utilizada para construir páginas web.

//HTML E JAVASCRIPT

    // JavaScript é uma linguagem de programação interpretada, usada para adicionar interatividade aos sites web.

// HTML E DOM

    // Document Object Model (DOM)
    // É uma interface de programação para manipular documentos HTML e XML.
    // InnerText é: 
    // TextContent: 
    // NodeType: 
    // ParentNode: 
    // ChildNodes: 
    // FirstChild: 
    // LastChild: 
    // NextSibling: 
    // PreviousSibling:

//document.body -> acessa todos os elementos
//document.body.children -> acessa todos os elementos filhos

// 1 - movendo o DOM

console.log(document.body.childNodes);

//getElementByID - querySelector - getElementsByTagName


const listItens = document.getElementsByTagName('li')
console.log(listItens);

const primeiroElemento = document.getElementById('title');
console.log(primeiroElemento.textContent);

const primeiroElementoPorTag = document.querySelector('h1');
console.log(primeiroElementoPorTag);

const primeiroElementoClasse = document.getElementsByClassName('product')
console.log(primeiroElementoClasse)