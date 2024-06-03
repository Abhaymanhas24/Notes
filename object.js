// const movieUrl = (domain, genre, year) => {
//     return "http://" + domain + "?genere=" + genre + "&year=" + year;
//   };

//   console.log(movieUrl("imdb.com", "thriller", 2020));

// const movieUrl = (domain, genre, year) =>
//   `http://${domain}?genere=${genre}&year=${year}`;

// console.log(movieUrl("imdb.com", "thriller", 2020));

const [, t1, t2, t3 = 80] = [100, 200, null];
console.log(t1, t2, t3);
