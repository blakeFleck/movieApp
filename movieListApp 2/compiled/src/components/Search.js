"use strict";

var Search = function Search(_ref) {
  var searchMovie = _ref.searchMovie;
  return React.createElement(
    "div",
    { className: "search-bar form-inline" },
    React.createElement("input", {
      className: "form-control",
      type: "text",
      onSubmit: function onSubmit(e) {
        return searchMovie(e.target.value);
      }
    }),
    React.createElement(
      "button",
      { className: "btn hidden-sm-down" },
      React.createElement("span", { className: "glyphicon glyphicon-search" }),
      React.createElement(
        "span",
        null,
        "Search movies."
      )
    )
  );
};
window.Search = Search;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwic2VhcmNoTW92aWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTO0FBQUEsTUFBRUMsV0FBRixRQUFFQSxXQUFGO0FBQUEsU0FDWDtBQUFBO0FBQUEsTUFBSyxXQUFVLHdCQUFmO0FBQ0k7QUFDRSxpQkFBVSxjQURaO0FBRUUsWUFBSyxNQUZQO0FBR0UsZ0JBQVUsa0JBQUNDLENBQUQ7QUFBQSxlQUFPRCxZQUFZQyxFQUFFQyxNQUFGLENBQVNDLEtBQXJCLENBQVA7QUFBQTtBQUhaLE1BREo7QUFNRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG9CQUFsQjtBQUNBLG9DQUFNLFdBQVUsNEJBQWhCLEdBREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFORixHQURXO0FBQUEsQ0FBYjtBQWFBQyxPQUFPTCxNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2VhcmNoID0gKHtzZWFyY2hNb3ZpZX0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyIGZvcm0taW5saW5lXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBvblN1Ym1pdD17KGUpID0+IHNlYXJjaE1vdmllKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBoaWRkZW4tc20tZG93blwiPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPlxuICAgIDxzcGFuPlNlYXJjaCBtb3ZpZXMuPC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG53aW5kb3cuU2VhcmNoID0gU2VhcmNoO1xuIl19