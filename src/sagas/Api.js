const url = "http://localhost:3000/movie";

function* getMovieFromApi() {
  return yield fetch(url)
    .then(values => values.json())
    .then(
      result => {
        return result;
      },
      err => {
        return err;
      }
    );
}

function* postInsertMovieFromApi(newMovie) {
  return yield fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: newMovie.title,
      author: newMovie.author
    })
  });
}

export const Api = {
  getMovieFromApi,
  postInsertMovieFromApi
};
