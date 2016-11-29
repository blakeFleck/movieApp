"use strict";

var MovieListEntry = function MovieListEntry(_ref) {
  var movie = _ref.movie;
  return React.createElement(
    "div",
    { className: "movieListEntries" },
    React.createElement(
      "div",
      { className: "movieListEntry list-group-item" },
      " ",
      movie.title,
      " ",
      movie.watched
    )
  );
};
window.MovieListEntry = MovieListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsIm1vdmllIiwidGl0bGUiLCJ3YXRjaGVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGlCQUFpQixTQUFqQkEsY0FBaUI7QUFBQSxNQUFFQyxLQUFGLFFBQUVBLEtBQUY7QUFBQSxTQUNyQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxnQ0FBZjtBQUFBO0FBQWtEQSxZQUFNQyxLQUF4RDtBQUFBO0FBQWdFRCxZQUFNRTtBQUF0RTtBQURGLEdBRHFCO0FBQUEsQ0FBckI7QUFLQUMsT0FBT0osY0FBUCxHQUF3QkEsY0FBeEIiLCJmaWxlIjoiTW92aWVMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTW92aWVMaXN0RW50cnkgPSAoe21vdmllfSkgPT4gKFxuPGRpdiBjbGFzc05hbWU9XCJtb3ZpZUxpc3RFbnRyaWVzXCI+XG4gIDxkaXYgY2xhc3NOYW1lPVwibW92aWVMaXN0RW50cnkgbGlzdC1ncm91cC1pdGVtXCI+IHttb3ZpZS50aXRsZX0ge21vdmllLndhdGNoZWR9PC9kaXY+XG48L2Rpdj5cbik7XG53aW5kb3cuTW92aWVMaXN0RW50cnkgPSBNb3ZpZUxpc3RFbnRyeTtcbiJdfQ==