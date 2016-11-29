"use strict";

var MovieList = function MovieList(_ref) {
  var movies = _ref.movies;
  return React.createElement(
    "div",
    { className: "movieList list-group" },
    movies.map(function (movie) {
      return React.createElement(MovieListEntry, { movie: movie });
    })
  );
};
window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwibW92aWVzIiwibWFwIiwibW92aWUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsWUFBWSxTQUFaQSxTQUFZO0FBQUEsTUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsU0FDWjtBQUFBO0FBQUEsTUFBSyxXQUFVLHNCQUFmO0FBQ0dBLFdBQU9DLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsYUFBVyxvQkFBQyxjQUFELElBQWdCLE9BQU9BLEtBQXZCLEdBQVg7QUFBQSxLQUFYO0FBREgsR0FEWTtBQUFBLENBQWhCO0FBS0FDLE9BQU9KLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6Ik1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNb3ZpZUxpc3QgPSAoe21vdmllc30pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllTGlzdCBsaXN0LWdyb3VwXCI+XG4gICAgICB7bW92aWVzLm1hcCgobW92aWUpID0+IDxNb3ZpZUxpc3RFbnRyeSBtb3ZpZT17bW92aWV9IC8+KX1cbiAgICA8L2Rpdj5cbik7XG53aW5kb3cuTW92aWVMaXN0ID0gTW92aWVMaXN0O1xuIl19