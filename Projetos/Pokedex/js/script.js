const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const btnVolt = document.querySelector('.btn-volt');
const btnProx = document.querySelector('.btn-prox');

let numPoke = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }

}

const renderPokemon = async (pokemon) => {
    pokemonNumber.innerHTML = ""
    pokemonName.innerHTML = "Buscando..."

    const data = await fetchPokemon(pokemon);

    if (data.id <= 649) {
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        input.value = "";

        numPoke = data.id;
    } else {
        pokemonName.innerHTML = "???"
        pokemonNumber.innerHTML = "???"
        pokemonImage.style.display = 'none';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderPokemon(input.value.toLowerCase());
});

btnVolt.addEventListener('click', () => {
    if (numPoke > 1) {
        numPoke -= 1;
        renderPokemon(numPoke);
    }
});
btnProx.addEventListener('click', () => {
    numPoke += 1;
    renderPokemon(numPoke);
});

renderPokemon(numPoke);

