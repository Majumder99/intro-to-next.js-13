import React from "react";
import Link from "next/link";
import Image from "next/image";

const Movie = ({ id, title, poster_path }) => {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  console.log(imagePath + poster_path);
  return (
    <div>
      <h1>{title}</h1>
      <p>{id}</p>
      <Link href="/">
        <Image
          src={imagePath + poster_path}
          alt="title"
          width={800}
          height={800}
        />
      </Link>
    </div>
  );
};

export default Movie;
