//SELEÇÃO DE ELEMENTOS 

    const buttons = document.querySelectorAll('#image-picker li');
    const image = document.querySelector('#product-image');

    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            console.log(e.target);
        buttons.forEach((btn) => {
            //procura o que estiver .color em btn e remove selected a cada clique
            btn.querySelector(".color").classList.remove("selected");
        });

        const button = e.target

        const id = button.getAttribute("id");
        //querySelector busca um elemento dentro do botão com a class "color"
        //classList permite adicionar, remover ou verificar classes
        button.querySelector(".color").classList.add("selected")
        
        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`); 
        
        setTimeout(() => {
            image.classList.toggle("changing")
        }, 200)
    });

});