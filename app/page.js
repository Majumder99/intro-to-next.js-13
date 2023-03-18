// "use client";

import Movie from "./Movie";

// we are going to write use client so that we can use useState, onclick etc

// import { useState } from "react";

export default async function Home() {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=e3356b304941ed4d279a71ceddc4a5f6"
  );

  const res = await data.json();
  console.log(res);

  return (
    <>
      <h1>Hello next 12</h1>
      {res.results.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </>
  );
}
