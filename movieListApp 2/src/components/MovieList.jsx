var MovieList = ({movies}) => (
    <div className="movieList list-group">
      {movies.map((movie) => <MovieListEntry movie={movie} />)}
    </div>
);
window.MovieList = MovieList;
