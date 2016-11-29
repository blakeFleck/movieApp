var MovieListEntry = ({movie}) => (
<div className="movieListEntries">
  <div className="movieListEntry list-group-item"> {movie.title} {movie.watched}</div>
</div>
);
window.MovieListEntry = MovieListEntry;
