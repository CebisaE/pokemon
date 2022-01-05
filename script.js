fetch("https://pokeapi.co/api/v2/pokemon")
.then((res)=>res.json())
.then((pokelist)=>{
    console.log(pokelist);
    pokelist.results.forEach(pokemon=> {
        document.querySelector("#list").innerHTML +=`
        <button class="button" onclick="getpokemon('${pokemon.url}')">${pokemon.name}</button>
        `
    });
});

function getpokemon(url){
    fetch(url)
.then((response)=> response.json())
.then((data)=>{
    console.log(data);
    document.querySelector("#charizard").innerHTML =`
    <img src=${data.sprites.front_default} alt="">
    <h1>Name:${data.name}</h1>
    <h2>Weight:${data.weight}</h2>
    <h3>Height:${data.height}</h3>
    <ul class="ability"><b>Ability</b>
    <li>${data.abilities[0].ability.name}</li>
    </ul>
    <div class="data">
    <ul ><b>Stats:</b>
        <li>${data.stats[0].stat.name}</li>
        <li>${data.stats[1].stat.name}</li>
        <li>${data.stats[2].stat.name}</li>
        <li>${data.stats[3].stat.name}</li>
        <li>${data.stats[4].stat.name}</li>
        <li>${data.stats[5].stat.name}</li>
    </ul>
    <ul><b>Moves:</b>
    <li>${data.moves[0].move.name}</li>
    <li>${data.moves[1].move.name}</li>
    <li>${data.moves[2].move.name}</li>
    <li>${data.moves[3].move.name}</li>
    </ul>
    </div>
    `;
});
}
getpokemon("https://pokeapi.co/api/v2/pokemon/bulbasaur")