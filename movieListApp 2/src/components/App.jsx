class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:[{ title: 'Mean Girls',watched:false},{title: 'Hackers',watched:true}, {title: 'The Grey',watched:false}],
    }
  }

  addMovies (movie){
    //assemble movie data
    var addMovie = {
      title:movie,
      watched:false
    }
    //update data
    this.state.movies.push(addMovie)

    //update state
    this.setState({
      movies:this.state.movies,
    })
  }

  searchMovie (movie) {
    _.each(movies, function(i){
      if(movies[i].title===movie){
        alert("seen the movie!")
      }
    })
  }

  render() {
    return (
    <div>
      <div className="row">
      <Header addMovie={this.addMovies.bind(this)} searchMovie={this.searchMovie.bind(this)}/>
      </div>
      <div className="col-md-5">
      <MovieList movies={this.state.movies}/>
      </div>
    </div>
  );
  }
}
window.App = App;
