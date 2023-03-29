import { useState, useEffect } from "react";
import Character from "./Character";
import Seacrh from "./Seacrh";

function Page({ page, setPage }) {
  return (
    <div>
      <p>Page: {page}</p>
      <header className="d-flex justify-content-between align-items-center">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setPage(page - 1)}
        >
          Previos
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </header>
    </div>
  );
}

function CharacterList() {
  const [personajes, setPersonajes] = useState([]);
  const [load, setLoad] = useState(true);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${name}`
      );
      const data = await response.json();
      setLoad(false);
      setPersonajes(data.results);
    };

    getData();
  }, [page, name]);

  return (
    <div className="container">
      <Page page={page} setPage={setPage} />

      <Seacrh name={name} setName={setName} />

      {load ? (
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            justifyItems: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
        <div className="row">
          {personajes.map((personaje) => {
            return (
              <div className="col-md-4" key={personaje.id}>
                <Character personaje={personaje} />
              </div>
            );
          })}
        </div>
      )}

      <Page page={page} setPage={setPage} />

      <footer>
        <div className="text-center">David Requeno 2023 &#169;</div>
      </footer>
    </div>
  );
}

export default CharacterList;
