var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elSelectType = document.querySelector(".select__type");
var elList = document.querySelector(".list");

elForm.addEventListener("submit", function (even) {
  even.preventDefault();
  console.log(elInput.value);
});

function elementCreator(tagName) {
  return document.createElement(tagName);
}

function cartoonCreator(pokemon) {
  var item = elementCreator("li");
  var img = elementCreator("img");
  var title = elementCreator("h3");
  var type = elementCreator("h4");
  var weight = elementCreator("span");
  var height = elementCreator("span");

  img.src = pokemon.img;
  title.textContent = pokemon.name;
  type.textContent = pokemon.type;
  weight.textContent = pokemon.weight;
  height.textContent = pokemon.height;

  item.appendChild(img);
  item.appendChild(title);
  item.appendChild(type);
  item.appendChild(weight);
  item.appendChild(height);

  elList.appendChild(item);
}

var genres = [];

for (var i = 0; i < pokemons.length; i++) {
  cartoonCreator(pokemons[i]);
}

//pokemon type dropdown

var uniqeGenres = [];

pokemons.forEach((element) => {
  element.type.forEach((type) => {
    if (!uniqeGenres.includes(type)) {
      uniqeGenres.push(type);

      var selectChild = document.createElement("option");
      selectChild.textContent = type;
      elSelectType.appendChild(selectChild);
    }
  });
});
