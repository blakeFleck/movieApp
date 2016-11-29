// var AddMovies = ({addMovie}) => (
//   <form onSubmit={addMovie}>
//
//   <div className="search-bar form-inline">
//       <input className="form-control" type="text" onClick={(e) => addMovie(e.target.value)}/>
//       <button className="btn hidden-sm-down"> <span className="glyphicon glyphicon-plus"></span> <span>Add movies.</span></button>
//   </div>
//
// </form>
// );
//
// window.AddMovies = AddMovies;

// var AddMovies = ({addMovie}) => (
//
//  <div>
//   <input ref={node => { input = node; }} />
//   <button onClick={() => { addMovie(input.value); input.value = '';}}>+</button>
// </div>
// );
// window.AddMovies = AddMovies;

class AddMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: false
    };
  }
handleInputChange() {
    this.props.addMovie($('.form-control').val());
    // this.setState({
    //   value: !this.state.value
    // })
    $('.form-control').val('')
  }

render() {
  return (
    <div className="search-bar form-inline">
        <input className="form-control" type="text"/>
        <button className="btn hidden-sm-down" onClick={this.handleInputChange.bind(this)}>
          <span className="glyphicon glyphicon-plus"></span>
        </button>
      </div>
  );
}
}
window.AddMovies = AddMovies;
