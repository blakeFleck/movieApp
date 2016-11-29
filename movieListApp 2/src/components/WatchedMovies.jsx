//Draft
var WatchedMovies = ({movies}) => (
    <div className="WatchedMovies list-group">
      {movies.filter((movie, function(){
        if(movie.watched==="true"){
          return true
        }
      }) => <MovieListEntry movie={movie} />)}
    </div>
);
window.WatchedMovies = WatchedMovies;
