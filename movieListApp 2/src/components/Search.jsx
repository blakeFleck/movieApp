var Search = ({searchMovie}) => (
  <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        onSubmit={(e) => searchMovie(e.target.value)}
        />
    <button className="btn hidden-sm-down">
    <span className="glyphicon glyphicon-search"></span>
    <span>Search movies.</span>
    </button>
  </div>
);
window.Search = Search;
