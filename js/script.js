"use strict";




let numberOfFilms;


function start(){
  numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');

  while (numberOfFilms =='' || numberOfFilms== null || isNaN(numberOfFilms) ){
    numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');
  };
}
start();
  const personalMovieDB = {
  count: numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privat: false
  };



function writeYourGenres(){
  for( let i=1; i<4; i++){
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
}

}
writeYourGenres();
console.log(personalMovieDB);


   function ShowMyDB(hidden){
   if(!hidden){
     console.log(personalMovieDB.privat);
   }
  }
  ShowMyDB(personalMovieDB.privat);

//  const a = prompt('Один из последних фильмов?', ''),
//        b = prompt('оценка', '');
      


//  personalMovieDB.movies[a] = b;

//  console.log(personalMovieDB);
