const fetchPokemon = () => {
  const pokeName = document.getElementById("pokeName");
  let pokeInput = pokeName.value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
  const onClick = document.querySelector('.onClick');

  fetch(url).then((res) => {
    if(res.status != "200"){
      pokeImage("./assets/images/notFound.png");
    }
    return res.json();

  }).then((data) => {

    console.log(data);

    const li = document.createElement('li');
    li.classList.add('.pokeInfo');

    let pokeImg = data.sprites.front_default;
    pokeImage(pokeImg);
    
    const pokeNameApi = document.createElement('span');
    pokeNameApi.classList.add('pokeNameApi', 'pokeApi');
    pokeNameApi.innerText = 'Nombre: ' + data.name;

    const pokeID = document.createElement('span');
    pokeID.classList.add('pokeID', 'pokeApi');
    pokeID.innerText = 'ID: ' + data.id;
    
    const pokeTypeApi = document.createElement('span');
    pokeTypeApi.classList.add('pokeTypeApi', 'pokeApi');
    pokeTypeApi.innerText = 'Tipo: ' + data.types[0].type.name;
    
    const pokeBasePowerApi = document.createElement('span');
    pokeBasePowerApi.classList.add('pokeBasePowerApi', 'pokeApi');
    pokeBasePowerApi.innerText = 'Poder base: ' + data.stats[0].base_stat + ', esfuerzo base: ' + data.stats[0].effort;
    
    const pokeAbility = document.createElement('span');
    pokeAbility.classList.add('pokeAbility', 'pokeApi');
    pokeAbility.innerText = 'Habilidad: ' + data.abilities[0].ability.name;
    
    const pokeMove = document.createElement('span');
    pokeMove.classList.add('pokeMove', 'pokeApi');
    pokeMove.innerText = 'Movimiento: ' + data.moves[0].move.name;
    
    li.append(pokeNameApi, pokeID, pokeTypeApi, pokeBasePowerApi, pokeAbility, pokeMove);
    document.querySelector('.data').appendChild(li);
    
    const eraseInfo = document.getElementById('submit');
    eraseInfo.addEventListener('click', () => {
      document.querySelector('.data').innerHTML = "";
      pokeImage("./assets/images/pokeball.png");
      document.getElementById('pokeName').value = "";
    })
    
  });
}

const pokeImage = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url;
}