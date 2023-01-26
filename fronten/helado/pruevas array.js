const main = document.querySelector('.main');


    const infoPais = [];

    infoPais.push({
        id: 0,
        nombre: 'Holanda',
        poblacion: 'Poblacion' + ': ' + '10',
    });

    infoPais.push({
        id: 1,
        nombre: 'Argentina',
        poblacion: 'Poblacion' + ': ' + '50',
    });

    infoPais.push({
        id: 2,
        nombre: 'Alemania',
        poblacion: 'Poblacion' + ': ' + '80',
    });


    let menucarrito =[]

    for (info of infoPais){

    const divInicial = document.createElement('div');

    
        const divInternoPrimario = document.createElement('div');
        divInternoPrimario.classList.add('divPrimario');

            const contenedorTextoPriamrioPrimario = document.createElement('p');
            const texto1Priamrio = document.createTextNode(info.nombre);

            const contenedorTextoSecundarioPrimario = document.createElement('p');
            const texto2Priamrio = document.createTextNode(info.poblacion);

            const contenedorDeBotton = document.createElement('botton');
            contenedorDeBotton.classList.add('bottonPrimario');
            contenedorDeBotton.setAttribute("id",info.id);
            contenedorDeBotton.addEventListener('click', () => {
                agregarAlCarrito(info.id)})
            const textDeBotton = document.createTextNode('aumento');

                divInternoPrimario.appendChild(contenedorTextoPriamrioPrimario);
                divInternoPrimario.appendChild(contenedorTextoSecundarioPrimario);
                divInternoPrimario.appendChild(contenedorDeBotton);

                contenedorTextoPriamrioPrimario.appendChild(texto1Priamrio);
                contenedorTextoSecundarioPrimario.appendChild(texto2Priamrio);
                contenedorDeBotton.appendChild(textDeBotton);

        divInicial.appendChild(divInternoPrimario);


    main.appendChild(divInicial);

    }

    const agregarAlCarrito = (infoId) => {
        const item = infoPais.find((info) => info.id === infoId)
        console.log()
        menucarrito.push(item)
        actualizarCarrito()
        console.log(menucarrito)
    }