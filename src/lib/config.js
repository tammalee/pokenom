
let config = {
    body: document.querySelector( 'body' ),
    app: document.querySelector( '#app' ),
    title: document.querySelector( '.title' ),
    subTitle: document.querySelector( '.subtitle' ),
    lsBerryNames: 'berryNames',
    lsBerryBox: 'berryBox',
    numBerries: 5,
    numPokemon: 3
};

const Pokedex = require('pokeapi-js-wrapper');
config.pdex = new Pokedex.Pokedex();
console.log(config.pdex);

export default config;