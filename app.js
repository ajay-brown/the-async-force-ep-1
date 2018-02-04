const oReq = new XMLHttpRequest();
const oReq2 = new XMLHttpRequest();

function person4Listener() {
  const dataPerson4 = JSON.parse(this.responseText);
  let name = dataPerson4.name;
  document.getElementById("person4Name").innerHTML = name;

  function homeworldListener() {
    const person4Homeworld = JSON.parse(this.responseText);
    let homeWorld = person4Homeworld.name;
    document.getElementById("person4HomeWorld").innerHTML = homeWorld;
  }

  oReq2.addEventListener("load", homeworldListener);
  oReq2.open("GET", "https://swapi.co/api/planets/1/");
  oReq2.send();
}

oReq.addEventListener("load", person4Listener);
oReq.open("GET", "https://swapi.co/api/people/4/");
oReq.send();
//////
const oReq3 = new XMLHttpRequest();
const oReq4 = new XMLHttpRequest();

function person14Listener() {
  const dataPerson14 = JSON.parse(this.responseText);
  let person14Name = dataPerson14.name;
  document.getElementById("person14Name").innerHTML = person14Name;

  function person14Species() {
    const dataSpecies = JSON.parse(this.responseText);
    let person14Species = dataSpecies.name;
    document.getElementById("person14Species").innerHTML = person14Species;
  }
  oReq4.addEventListener("load", person14Species);
  oReq4.open("GET", "https://swapi.co/api/species/1/");
  oReq4.send();
}

oReq3.addEventListener("load", person14Listener);
oReq3.open("GET", "https://swapi.co/api/people/14/");
oReq3.send();
///
const oReq5 = new XMLHttpRequest();
const oReq6 = new XMLHttpRequest();

function getFilms() {
  function getFilmPlanets() {
    const planets = JSON.parse(this.responseText);
    const planetList = [];
    for (var i = 0; i < planets.results.length; i++) {
      planetList.push(planets.results[i].name + " index of " + i);
    }
    console.log(planetList);
  }
  const films = JSON.parse(this.responseText);
  const filmList = [];
  for (var i = 0; i < 7; i++) {
    filmList.push(films.results[i].title);
  }
  for (var j = 0; j < 7; j++) {
    let entry = document.createElement("ul");
    entry.appendChild(document.createTextNode(filmList[j]));
    document.getElementById("filmList").appendChild(entry);
    let planetList2 = films.results[j].planets;

    var req = new XMLHttpRequest();
    req.open("GET", planetList2, true);
    req.addEventListener("load", planetList2);

    let entry2 = document.createElement("li");
    entry2.appendChild(document.createTextNode(planetList2 + ""));
    document.getElementsByTagName("ul")[j].appendChild(entry2);
  }

  oReq6.addEventListener("load", getFilmPlanets);
  oReq6.open("GET", "https://swapi.co/api/planets/");
  oReq6.send();
}

oReq5.addEventListener("load", getFilms);
oReq5.open("GET", "https://swapi.co/api/films/");
oReq5.send();
