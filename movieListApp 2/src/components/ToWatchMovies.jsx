//Draft
var ToWatchMovies = ({movies}) => (
    <div className="ToWatchMovies list-group">
      {movies.filter((movie, function(){
        if(movie.watched==="false"){
          return true
        }
      }) => <MovieListEntry movie={movie} />)}
    </div>
);
window.ToWatchMovies = ToWatchMovies;
