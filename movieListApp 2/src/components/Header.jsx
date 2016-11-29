var Header = ({addMovie, searchMovie}) => (
  <div className="navbar navbar-form navbar-left">
    <div className="col-md-6 col-md-offset-3">
          MovieList
    </div>
    <div className="searchStuff col-md-8">
      <div className="col-md-4">
        <AddMovies addMovie={addMovie}/>
          <div className="col-md-20">
            <Search searchMovie={searchMovie}/>
          </div>
      </div>
    </div>
  </div>
);
window.Header = Header;
