const Seacrh = ({ name, setName }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        marginBottom: 25
      }}
    >
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search character"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          style={{
            padding: 10,
            borderRadius: 10,
            backgroundColor: "#505d69",
            color: "rgb(250, 253, 255)",
            marginLeft: 13,
            border: "none",
          }}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Seacrh;
