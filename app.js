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
  }
  const films = JSON.parse(this.responseText);
  const filmList = [];
  for (var i = 0; i < 7; i++) {
    filmList.push(films.results[i].title);
  }
  for (var j = 0; j < 7; j++) {
    let entry = document.createElement("ol"); //creating each entry with ol
    var planetName = entry.appendChild(document.createTextNode(filmList[j]));
    document.getElementById("filmList").appendChild(entry); //appending ol to filmList
    let planetArr = [];
    let planetList2 = films.results[j].planets;
    planetArr.push(planetList2);

    for (var k = 0; k < planetArr.length; k++) {
      for (var l = 0; l < planetArr[k].length; l++) {
        let string = planetArr[k][l].toString();
        var reqPlanet = new XMLHttpRequest();
        reqPlanet.open("GET", string);
        reqPlanet.addEventListener("load", planetFunc);
        reqPlanet.send();
        function planetFunc() {
          let data = JSON.parse(this.responseText);
          let planetName = data.name;
          let entry2 = document.createElement("ul");
          entry2.appendChild(document.createTextNode(planetName + ""));
          document.getElementsByTagName("ol")[j].appendChild(entry2);
        }
      }
    }
  }
  oReq6.addEventListener("load", getFilmPlanets);
  oReq6.open("GET", "https://swapi.co/api/planets/");
  oReq6.send();
}

oReq5.addEventListener("load", getFilms);
oReq5.open("GET", "https://swapi.co/api/films/");
oReq5.send();
