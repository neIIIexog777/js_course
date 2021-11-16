"use strict";


const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');

const personalMovieDB = {
count: numberOfFilms,
movies:{},
actors:{},
genres:[],
privat: false
};

const a = prompt('Один из последних фильмов?', ''),
      b = prompt('оценка', '');
      
personalMovieDB.movies[a] = b;

console.log(personalMovieDB);
