import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
    <div id="home">
      <h1 color="firebrick">Mburu is a web developer from Kenya</h1>
      <main>
     <Home />
      <p>{name}</p>
      <p>{city}</p>
   </main>
    </div>

  );
}



export default Home;
