import {writeCard, getRandomId} from "./Card.js"

document.addEventListener("DOMContentLoaded", () => {
  const randomId = getRandomId();

  fetchData(randomId);
});

const fetchData = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const dataJson = await res.json();

    console.log(dataJson)
    const pokemon = {
      img: dataJson.sprites.other.dream_world.front_default,
      name: dataJson.name,
      experience: dataJson.base_experience,
      hp: dataJson.stats[0].base_stat,
      attack: dataJson.stats[1].base_stat,
      defense: dataJson.stats[2].base_stat,
      special: dataJson.stats[3].base_stat,
    };

    writeCard(pokemon);
  } catch (error) {
    console.log(error);
  }
};