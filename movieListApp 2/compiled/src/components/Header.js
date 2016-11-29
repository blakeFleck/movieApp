"use strict";

var Header = function Header(_ref) {
  var addMovie = _ref.addMovie,
      searchMovie = _ref.searchMovie;
  return React.createElement(
    "div",
    { className: "navbar navbar-form navbar-left" },
    React.createElement(
      "div",
      { className: "col-md-6 col-md-offset-3" },
      "MovieList"
    ),
    React.createElement(
      "div",
      { className: "searchStuff col-md-8" },
      React.createElement(
        "div",
        { className: "col-md-4" },
        React.createElement(AddMovies, { addMovie: addMovie }),
        React.createElement(
          "div",
          { className: "col-md-20" },
          React.createElement(Search, { searchMovie: searchMovie })
        )
      )
    )
  );
};
window.Header = Header;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qc3giXSwibmFtZXMiOlsiSGVhZGVyIiwiYWRkTW92aWUiLCJzZWFyY2hNb3ZpZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxNQUFFQyxRQUFGLFFBQUVBLFFBQUY7QUFBQSxNQUFZQyxXQUFaLFFBQVlBLFdBQVo7QUFBQSxTQUNYO0FBQUE7QUFBQSxNQUFLLFdBQVUsZ0NBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLDBCQUFmO0FBQUE7QUFBQSxLQURGO0FBSUU7QUFBQTtBQUFBLFFBQUssV0FBVSxzQkFBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNFLDRCQUFDLFNBQUQsSUFBVyxVQUFVRCxRQUFyQixHQURGO0FBRUk7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0UsOEJBQUMsTUFBRCxJQUFRLGFBQWFDLFdBQXJCO0FBREY7QUFGSjtBQURGO0FBSkYsR0FEVztBQUFBLENBQWI7QUFlQUMsT0FBT0gsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEhlYWRlciA9ICh7YWRkTW92aWUsIHNlYXJjaE1vdmllfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZm9ybSBuYXZiYXItbGVmdFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXCI+XG4gICAgICAgICAgTW92aWVMaXN0XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hTdHVmZiBjb2wtbWQtOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICA8QWRkTW92aWVzIGFkZE1vdmllPXthZGRNb3ZpZX0vPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIwXCI+XG4gICAgICAgICAgICA8U2VhcmNoIHNlYXJjaE1vdmllPXtzZWFyY2hNb3ZpZX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcbndpbmRvdy5IZWFkZXIgPSBIZWFkZXI7XG4iXX0=