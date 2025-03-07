// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const amigos = [];

// Agrega un amigo

const agregarAmigo = () => {
    const input = document.getElementById( 'amigo' );
    const nombre = input.value.trim();

    if ( nombre === '') {
        alert( 'Debes ingresar un nombre' );
        return;
    }

amigos.push( nombre );
input.value = '';
actualizarLista();


};

// Actualiza la lista de amigos
const actualizarLista = () => {
    const lista = document.getElementById( 'listaAmigos' );
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
    }
      
};

// Sortear un amigo

const sortearAmigo = () => {

const indiceAleatorio = Math.floor( Math.random() * amigos.length );

const amigoSorteado = amigos[ indiceAleatorio ];

const resultadoElement = document.getElementById( 'resultado' );
resultadoElement.innerHTML = `<li>${amigoSorteado}</li>`;
};

   
