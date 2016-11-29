'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      movies: [{ title: 'Mean Girls', watched: false }, { title: 'Hackers', watched: true }, { title: 'The Grey', watched: false }]
    };
    return _this;
  }

  _createClass(App, [{
    key: 'addMovies',
    value: function addMovies(movie) {
      //assemble movie data
      var addMovie = {
        title: movie,
        watched: false
      };
      //update data
      this.state.movies.push(addMovie);

      //update state
      this.setState({
        movies: this.state.movies
      });
    }
  }, {
    key: 'searchMovie',
    value: function searchMovie(movie) {
      _.each(movies, function (i) {
        if (movies[i].title === movie) {
          alert("seen the movie!");
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(Header, { addMovie: this.addMovies.bind(this), searchMovie: this.searchMovie.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'col-md-5' },
          React.createElement(MovieList, { movies: this.state.movies })
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsInRpdGxlIiwid2F0Y2hlZCIsIm1vdmllIiwiYWRkTW92aWUiLCJwdXNoIiwic2V0U3RhdGUiLCJfIiwiZWFjaCIsImkiLCJhbGVydCIsImFkZE1vdmllcyIsImJpbmQiLCJzZWFyY2hNb3ZpZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQU8sQ0FBQyxFQUFFQyxPQUFPLFlBQVQsRUFBc0JDLFNBQVEsS0FBOUIsRUFBRCxFQUFzQyxFQUFDRCxPQUFPLFNBQVIsRUFBa0JDLFNBQVEsSUFBMUIsRUFBdEMsRUFBdUUsRUFBQ0QsT0FBTyxVQUFSLEVBQW1CQyxTQUFRLEtBQTNCLEVBQXZFO0FBREksS0FBYjtBQUZpQjtBQUtsQjs7Ozs4QkFFVUMsSyxFQUFNO0FBQ2Y7QUFDQSxVQUFJQyxXQUFXO0FBQ2JILGVBQU1FLEtBRE87QUFFYkQsaUJBQVE7QUFGSyxPQUFmO0FBSUE7QUFDQSxXQUFLSCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JLLElBQWxCLENBQXVCRCxRQUF2Qjs7QUFFQTtBQUNBLFdBQUtFLFFBQUwsQ0FBYztBQUNaTixnQkFBTyxLQUFLRCxLQUFMLENBQVdDO0FBRE4sT0FBZDtBQUdEOzs7Z0NBRVlHLEssRUFBTztBQUNsQkksUUFBRUMsSUFBRixDQUFPUixNQUFQLEVBQWUsVUFBU1MsQ0FBVCxFQUFXO0FBQ3hCLFlBQUdULE9BQU9TLENBQVAsRUFBVVIsS0FBVixLQUFrQkUsS0FBckIsRUFBMkI7QUFDekJPLGdCQUFNLGlCQUFOO0FBQ0Q7QUFDRixPQUpEO0FBS0Q7Ozs2QkFFUTtBQUNQLGFBQ0E7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxLQUFmO0FBQ0EsOEJBQUMsTUFBRCxJQUFRLFVBQVUsS0FBS0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQWxCLEVBQTZDLGFBQWEsS0FBS0MsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBMUQ7QUFEQSxTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0EsOEJBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS2IsS0FBTCxDQUFXQyxNQUE5QjtBQURBO0FBSkYsT0FEQTtBQVVEOzs7O0VBMUNlYyxNQUFNQyxTOztBQTRDeEJDLE9BQU9uQixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdmllczpbeyB0aXRsZTogJ01lYW4gR2lybHMnLHdhdGNoZWQ6ZmFsc2V9LHt0aXRsZTogJ0hhY2tlcnMnLHdhdGNoZWQ6dHJ1ZX0sIHt0aXRsZTogJ1RoZSBHcmV5Jyx3YXRjaGVkOmZhbHNlfV0sXG4gICAgfVxuICB9XG5cbiAgYWRkTW92aWVzIChtb3ZpZSl7XG4gICAgLy9hc3NlbWJsZSBtb3ZpZSBkYXRhXG4gICAgdmFyIGFkZE1vdmllID0ge1xuICAgICAgdGl0bGU6bW92aWUsXG4gICAgICB3YXRjaGVkOmZhbHNlXG4gICAgfVxuICAgIC8vdXBkYXRlIGRhdGFcbiAgICB0aGlzLnN0YXRlLm1vdmllcy5wdXNoKGFkZE1vdmllKVxuXG4gICAgLy91cGRhdGUgc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vdmllczp0aGlzLnN0YXRlLm1vdmllcyxcbiAgICB9KVxuICB9XG5cbiAgc2VhcmNoTW92aWUgKG1vdmllKSB7XG4gICAgXy5lYWNoKG1vdmllcywgZnVuY3Rpb24oaSl7XG4gICAgICBpZihtb3ZpZXNbaV0udGl0bGU9PT1tb3ZpZSl7XG4gICAgICAgIGFsZXJ0KFwic2VlbiB0aGUgbW92aWUhXCIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPEhlYWRlciBhZGRNb3ZpZT17dGhpcy5hZGRNb3ZpZXMuYmluZCh0aGlzKX0gc2VhcmNoTW92aWU9e3RoaXMuc2VhcmNoTW92aWUuYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICA8TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuICB9XG59XG53aW5kb3cuQXBwID0gQXBwO1xuIl19