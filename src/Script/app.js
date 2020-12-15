const getRandomId = (min = 1, max = 899) => Math.floor(Math.random() * (max - min) + min);

document.addEventListener("DOMContentLoaded", () => {
  const randomId = getRandomId();

  fetchData(randomId);
});

const fetchData = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const dataJson = await res.json();

    const pokemon = {
      img: dataJson.sprites.other.dream_world.front_default,
      name: dataJson.name,
      experience: dataJson.base_experience,
      hp: dataJson.stats[0].base_stat,
      attack: dataJson.stats[1].base_stat,
      defense: dataJson.stats[2].base_stat,
      special: dataJson.stats[3].base_stat,
    };

    pintarCard(pokemon);
  } catch (error) {
    console.log(error);
  }
};

const pintarCard = (pokemon) => {
  const mainFlex = document.getElementById("main-container");
  const templateCard = document.getElementById("template-card").content;
  const clone = templateCard.cloneNode(true);
  const fragment = document.createDocumentFragment();

  clone.querySelector(".center-img").setAttribute("src", pokemon.img);

  clone.querySelector(
    ".center-h2"
  ).innerHTML = `${pokemon.name} <span>${pokemon.hp}hp</span>`;

  clone.querySelector(".center-p").textContent = `${pokemon.experience} exp`;
  clone.querySelectorAll(".footer h3")[0].textContent = pokemon.attack + "K";
  clone.querySelectorAll(".footer h3")[1].textContent = pokemon.special + "K";
  clone.querySelectorAll(".footer h3")[2].textContent = pokemon.defense + "K";

  fragment.appendChild(clone);
  mainFlex.appendChild(fragment);
};