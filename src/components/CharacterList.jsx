import { useState, useEffect } from "react";
import Character from "./Character";

function Page({page, setPage}) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>Page: {page}</p>
      <button className="btn btn-primary btn-sm" onClick={() => setPage(page + 1)}>
        Pagina {page}
      </button>
    </header>
  )
}

function CharacterList() {
  
    const [personajes, setPersonajes] = useState([]);
    const [load, setLoad] = useState(true)
    const [page, setPage] = useState(1)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoad(false)
      setPersonajes(data.results);
    };

    getData();
  }, [page]);


    return (
    <div className="container">

      <Page page={page} setPage={setPage}/>

      {
        load ? <div className="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div> : 
        <div className="row">
        {personajes.map((personaje) => {
        return (
          <div className="col-md-4" key={personaje.id}>
            <Character personaje={personaje} />
          </div>
        );
      })}
      </div>
      }
      
      <Page page={page} setPage={setPage}/>

      <footer><div className="text-center">David Requeno 2023 &#169;</div>
</footer>

    </div>
);
}

export default CharacterList;
