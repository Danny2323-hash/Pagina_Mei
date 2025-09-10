const fotos = [
    {
        imagen: 'images/foto1.jpg',
        texto: 'Aquí va el texto para nuestra primera foto. ¡Un recuerdo que siempre atesoraré!',
        musica: 'music/cancion1.mp3'
    },
    {
        imagen: 'images/foto2.jpg',
        texto: 'Este es el texto para la segunda foto. ¡No puedo creer lo mucho que hemos crecido juntos!',
        musica: 'music/cancion2.mp3'
    },
    {
        imagen: 'images/foto3.jpg',
        texto: 'Un recuerdo de nuestro viaje a la playa, con el mar y el sol como testigos de nuestro amor.',
        musica: 'music/cancion3.mp3'
    }
    // Añade más objetos para cada foto que quieras mostrar
];

const fechaConocimiento = new Date('2023-08-15'); // ¡Importante! Cambia esta fecha a la fecha en que se conocieron.

const fotoElemento = document.getElementById('foto');
const textoElemento = document.getElementById('texto-foto');
const musicaElemento = document.getElementById('musica');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');
const contadorElemento = document.getElementById('contador-dias');

let indiceActual = 0;

function mostrarFoto() {
    const fotoActual = fotos[indiceActual];
    fotoElemento.src = fotoActual.imagen;
    textoElemento.textContent = fotoActual.texto;
    musicaElemento.src = fotoActual.musica;
    musicaElemento.load();
    musicaElemento.play();
}

function actualizarContadorDias() {
    const hoy = new Date();
    const diferenciaMilisegundos = hoy - fechaConocimiento;
    const unDiaEnMilisegundos = 1000 * 60 * 60 * 24;
    const diasTranscurridos = Math.floor(diferenciaMilisegundos / unDiaEnMilisegundos);
    
    contadorElemento.textContent = `Llevamos ${diasTranscurridos} días juntos ❤️`;
}

flechaDerecha.addEventListener('click', () => {
    indiceActual++;
    if (indiceActual >= fotos.length) {
        indiceActual = 0;
    }
    mostrarFoto();
});

flechaIzquierda.addEventListener('click', () => {
    indiceActual--;
    if (indiceActual < 0) {
        indiceActual = fotos.length - 1;
    }
    mostrarFoto();
});

document.addEventListener('DOMContentLoaded', () => {
    mostrarFoto();
    actualizarContadorDias();
});