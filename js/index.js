var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elSelectType = document.querySelector(".select__type");
var elList = document.querySelector(".list");

var genres = [];

for (var i = 0; i < pokemons.length; i++) {
  var item = document.createElement("li");
  var img = document.createElement("img");
  var title = document.createElement("h3");
  var type = document.createElement("h4");
  var weight = document.createElement("span");
  var height = document.createElement("span");
  var icon = document.createElement("img");

  img.src = pokemons[i].img;
  title.textContent = pokemons[i].name;
  type.textContent = pokemons[i].type;
  weight.textContent = pokemons[i].weight;
  height.textContent = pokemons[i].height;

  item.appendChild(img);
  item.appendChild(title);
  item.appendChild(type);
  item.appendChild(weight);
  item.appendChild(height);

  elList.appendChild(item);

  //pokemon type dropdown

  pokemons[i].type.forEach(function (item) {
    if (!genres.includes(item)) {
      genres.push(item);
    }
  });
}

genres.forEach((item) => {
  var selectChild = document.createElement("option");
  selectChild.textContent = item;
  elSelectType.appendChild(selectChild);
});

elForm.addEventListener("submit", function (even) {
  even.preventDefault();
  console.log(elInput.value);
});
