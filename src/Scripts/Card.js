const writeCard = pokemon => {
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
  
    const rechargeButton = document.querySelector(".center-button");
    rechargeButton.addEventListener("click", () => location.reload());
  };

  const getRandomId = (min = 1, max = 251) =>
  Math.floor(Math.random() * (max - min) + min);

  export {writeCard, getRandomId};