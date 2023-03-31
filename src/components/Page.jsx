function Page({ page, setPage }) {
  return (
    <div>
      <p>Page: {page}</p>
      <header className="d-flex justify-content-between align-items-center">
        {page > 1 && (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
        )}
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

export default Page;
