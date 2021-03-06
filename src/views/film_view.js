const PubSub = require("../helpers/pub_sub.js");

const FilmView = function(container, film){
  this.filmsContainer = container;
  this.film = film;
}

FilmView.prototype.render = function (film) {
  const filmContainer = document.createElement('div');
  filmContainer.classList.add('film');

  const card = document.createElement('div');
  card.setAttribute('class', 'card');

  const name = this.createFilmHeading();
  card.appendChild(name);

  const description = this.createFilmDescription();
  card.appendChild(description);

  const rating = this.createFilmDetailsList();
  card.appendChild(rating);

  filmContainer.appendChild(card);
  this.filmsContainer.appendChild(filmContainer);
};

FilmView.prototype.createFilmHeading = function () {
  const name = document.createElement('h2');
  name.textContent = this.film.title;
  return name;
}

FilmView.prototype.createFilmDescription = function () {
  const description = document.createElement('p');
  description.textContent = this.film.description;
  return description;
}

FilmView.prototype.createFilmDetailsList = function () {
  const filmDetailsList = document.createElement('ul');
  this.populateList(filmDetailsList);
  return filmDetailsList;
}

FilmView.prototype.populateList = function (list) {
    const filmReleaseListItem = document.createElement('li');
    filmReleaseListItem.textContent = `Release Date: ${this.film.release_date}`;
    list.appendChild(filmReleaseListItem);
    const filmRatingListItem = document.createElement('li');
    filmRatingListItem.textContent = `Rating: ${this.film.rt_score}%`;
    list.appendChild(filmRatingListItem);
}

module.exports = FilmView;
