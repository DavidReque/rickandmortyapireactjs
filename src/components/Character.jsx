function Character({ personaje }) {
  return (
    <div className="text-center p-5">
      <h3>{personaje.name}</h3>
      <img className="img-fluid rounded-pill" src={personaje.image} alt={personaje.name}/>
      <p>{personaje.origin.name}</p>
    </div>
  );
}

export default Character;
