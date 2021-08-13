// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((elem) => {
    return elem.director;
  }) 
    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let steveDramaMovies = movies.filter((movie) => {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  })
  return steveDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let scores = movies.map(movie => {
    if (typeof movie.score !== 'number') {
      return 0
    } else {
      return movie.score;
    }
  })

  let sumScores = scores.reduce((acc, score) => {
      return acc + score;
  })
  return parseFloat((sumScores / scores.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter((movie) => {
    return movie.genre.includes('Drama');
  })
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  if (movies.length === 0) {
    return null;
  }
  return movies.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  })
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  movieTitles = movies.map(movie => movie.title)
  orderedTitles = movieTitles.sort((a, b) => {
      return a.localeCompare(b);
  })
  return orderedTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  //const newMovies = Object.assign([], movies);
  let newMovies = JSON.parse(JSON.stringify(movies));
  return newMovies.map((movie) => {
    let hours = 0;
    if (movie.duration.includes('h')) {
      hours = parseInt(movie.duration.slice(0, movie.duration.indexOf('h')));
    }
    let min = 0;
    if (movie.duration.includes('m')) {
      min = parseInt(movie.duration.slice(movie.duration.indexOf(' '), movie.duration.indexOf('m')));
    }
    movie.duration = parseInt(hours * 60 + min);
    return movie
  })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null;
  }
  let yearArr = movies.map(movie => movie.year)
  let moviesOfYear = [];
  for (let i = 0; i < yearArr.length; i++) {
      moviesOfYear.push(movies.filter((movie) => {
          return movie.year === yearArr[i];
      }))
  }
  let avgScores = [];
  for (let i = 0; i < moviesOfYear.length; i++) {
      avgScores.push(scoresAverage(moviesOfYear[i]));
  }
  let avgScoresCopy = JSON.parse(JSON.stringify(avgScores));
  let sortedScores = avgScoresCopy.sort((a, b) => {
      return b - a;
  })
  let score = sortedScores[0];
  let year = yearArr[avgScores.indexOf(sortedScores[0])];
  return `The best year was ${year} with an average score of ${score}`
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
