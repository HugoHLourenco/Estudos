const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const btnVolt = document.querySelector('.btn-volt');
const btnProx = document.querySelector('.btn-prox');
const btnShiny = document.querySelector('.btn-shiny');
const btnGeracao = document.querySelector('.btn-geracao')


let numPoke = 1;
let imagem = "";
let shiny = false;
let geracao = "0";

// Busca pelos pokemons ----------------------------------------
const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
}

// Renderiza os pokemons ---------------------------------------
const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = "Buscando..."
    pokemonNumber.innerHTML = "???"

    const data = await fetchPokemon(pokemon);
    
    switch (geracao) {
        // Gen 5 -----------------------------------------------
        case "5":
            if (data.id <= 649 && shiny === true) {
                pokemonImage.style.display = 'block';
                pokemonName.innerHTML = data.name;
                pokemonNumber.innerHTML = data.id;
                pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny'];
        
                input.value = ""; 
        
                imagem = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        
                numPoke = data.id;
            } else if (data.id <= 649 && shiny === false) {
                pokemonImage.style.display = 'block';
                pokemonName.innerHTML = data.name;
                pokemonNumber.innerHTML = data.id;
                pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        
                input.value = "";
        
                imagem = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        
                numPoke = data.id;
            } 
            break
        // Gen 4
        case "4":
            if (data.id <= 493 && shiny === true) {
                pokemonImage.style.display = 'block';
                pokemonName.innerHTML = data.name;
                pokemonNumber.innerHTML = data.id;
                pokemonImage.src = data['sprites']['versions']['generation-iv']['platinum']['front_shiny'];
        
                input.value = ""; 
        
                imagem = data['sprites']['versions']['generation-iv']['platinum']['front_default'];
        
                numPoke = data.id;
            } else if (data.id <= 493 && shiny === false) {
                pokemonImage.style.display = 'block';
                pokemonName.innerHTML = data.name;
                pokemonNumber.innerHTML = data.id;
                pokemonImage.src = data['sprites']['versions']['generation-iv']['platinum']['front_default'];
        
                input.value = "";
        
                imagem = data['sprites']['versions']['generation-iv']['platinum']['front_default'];
        
                numPoke = data.id;
            } else {
                pokemonNumber.innerHTML = "???"
                pokemonName.innerHTML = "MissingNO."
                pokemonImage.src = "../images/missigno.png"
            }
            break
        // Gen 1 -----------------------------------------------
        case "1":
            if(data.id < 152) {
                pokemonImage.style.display = 'block';
                pokemonName.innerHTML = data.name;
                pokemonNumber.innerHTML = data.id;
                pokemonImage.src = data['sprites']['versions']['generation-i']['red-blue']['front_default'];
        
                input.value = "";
        
                imagem = data['sprites']['versions']['generation-i']['red-blue']['front_default'];
        
                numPoke = data.id;
            }  else {
                pokemonNumber.innerHTML = "???"
                pokemonName.innerHTML = "MissingNO."
                pokemonImage.src = "../images/missigno.png"
            }
            break
        }
        
    
}

// Métodeos ----------------------------------------------------
form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderPokemon(input.value.toLowerCase());
});

btnVolt.addEventListener('click', async () => {
    if (numPoke > 1) {
        numPoke -= 1;
        renderPokemon(numPoke);
    }
});

btnProx.addEventListener('click', async () => {
        switch (geracao) {
            case "5":
                if (numPoke < 649){
                    numPoke += 1;
                    renderPokemon(numPoke);
                }
                break;
            case "4":
                if (numPoke < 493){
                    numPoke += 1;
                    renderPokemon(numPoke);
                }
                break;
        }
});

btnShiny.addEventListener('click', async (pokemon) => {
    switch(geracao) {
        case "5":
            if (pokemonImage.src !== imagem) {
                pokemonImage.src = imagem
                shiny = false;
                btnShiny.style.color = "red";
                return shiny;
            } 
            else {
                const imgShiny = await fetchPokemon(numPoke);
                if (imgShiny) {
                    pokemonImage.src = imgShiny['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny'];
                    shiny = true;
                    btnShiny.style.color = "green";
                    return shiny;   
                }
            }
            break
        case "4":
            if (pokemonImage.src !== imagem) {
                pokemonImage.src = imagem
                shiny = false;
                btnShiny.style.color = "red";
                return shiny;
            } 
            else {
                const imgShiny = await fetchPokemon(numPoke);
                if (imgShiny) {
                    pokemonImage.src = imgShiny['sprites']['versions']['generation-iv']['platinum']['front_shiny'];
                    shiny = true;
                    btnShiny.style.color = "green";
                    return shiny;   
                }
            }
            break
        case "2":

            break
        case "1":
            
            break
    }

})

btnGeracao.addEventListener('click', () => {
    const selectbox = document.getElementById('geracao');
       
    geracao = selectbox.value;
    alert(geracao)

    return geracao;
})

renderPokemon(numPoke);
geracao = "4";

