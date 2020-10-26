async function setData(pokemon) {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon);
    const data = await result.json();
    console.log(data);
    pokemonName.innerHTML = data.name[0].toUpperCase() + data.name.slice(1);
    pokemonID.innerHTML = `Nummer: ${data.id}`;
    pokemonWeight.innerHTML = `Gewicht: ${data.weight}`;
    pokemonImg.src = data.sprites.other['official-artwork'].front_default;
    pokemonImg2.src = data.sprites.front_default;
}

pokemonButton.addEventListener("click", e => {
    if (pokemonInput.value != 0) {
        setData(pokemonInput.value.toLowerCase());
    }
});

document.addEventListener("keydown", e => {
    if (e.key == "Enter") {
        if (pokemonInput.value != 0) {
            setData(pokemonInput.value.toLowerCase());
        }
    }
});
