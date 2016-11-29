'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var AddMovies = function (_React$Component) {
  _inherits(AddMovies, _React$Component);

  function AddMovies(props) {
    _classCallCheck(this, AddMovies);

    var _this = _possibleConstructorReturn(this, (AddMovies.__proto__ || Object.getPrototypeOf(AddMovies)).call(this, props));

    _this.state = {
      value: false
    };
    return _this;
  }

  _createClass(AddMovies, [{
    key: 'handleInputChange',
    value: function handleInputChange() {
      this.props.addMovie($('.form-control').val());
      // this.setState({
      //   value: !this.state.value
      // })
      $('.form-control').val('');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'search-bar form-inline' },
        React.createElement('input', { className: 'form-control', type: 'text' }),
        React.createElement(
          'button',
          { className: 'btn hidden-sm-down', onClick: this.handleInputChange.bind(this) },
          React.createElement('span', { className: 'glyphicon glyphicon-plus' })
        )
      );
    }
  }]);

  return AddMovies;
}(React.Component);

window.AddMovies = AddMovies;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FkZE1vdmllcy5qc3giXSwibmFtZXMiOlsiQWRkTW92aWVzIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiYWRkTW92aWUiLCIkIiwidmFsIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiO0FBSGlCO0FBTWxCOzs7O3dDQUNpQjtBQUNoQixXQUFLRixLQUFMLENBQVdHLFFBQVgsQ0FBb0JDLEVBQUUsZUFBRixFQUFtQkMsR0FBbkIsRUFBcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQUQsUUFBRSxlQUFGLEVBQW1CQyxHQUFuQixDQUF1QixFQUF2QjtBQUNEOzs7NkJBRU07QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsd0JBQWY7QUFDSSx1Q0FBTyxXQUFVLGNBQWpCLEVBQWdDLE1BQUssTUFBckMsR0FESjtBQUVJO0FBQUE7QUFBQSxZQUFRLFdBQVUsb0JBQWxCLEVBQXVDLFNBQVMsS0FBS0MsaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCLElBQTVCLENBQWhEO0FBQ0Usd0NBQU0sV0FBVSwwQkFBaEI7QUFERjtBQUZKLE9BREY7QUFRRDs7OztFQXpCdUJDLE1BQU1DLFM7O0FBMkI5QkMsT0FBT1gsU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoiQWRkTW92aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyIEFkZE1vdmllcyA9ICh7YWRkTW92aWV9KSA9PiAoXG4vLyAgIDxmb3JtIG9uU3VibWl0PXthZGRNb3ZpZX0+XG4vL1xuLy8gICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbi8vICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIG9uQ2xpY2s9eyhlKSA9PiBhZGRNb3ZpZShlLnRhcmdldC52YWx1ZSl9Lz5cbi8vICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGhpZGRlbi1zbS1kb3duXCI+IDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1wiPjwvc3Bhbj4gPHNwYW4+QWRkIG1vdmllcy48L3NwYW4+PC9idXR0b24+XG4vLyAgIDwvZGl2PlxuLy9cbi8vIDwvZm9ybT5cbi8vICk7XG4vL1xuLy8gd2luZG93LkFkZE1vdmllcyA9IEFkZE1vdmllcztcblxuLy8gdmFyIEFkZE1vdmllcyA9ICh7YWRkTW92aWV9KSA9PiAoXG4vL1xuLy8gIDxkaXY+XG4vLyAgIDxpbnB1dCByZWY9e25vZGUgPT4geyBpbnB1dCA9IG5vZGU7IH19IC8+XG4vLyAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyBhZGRNb3ZpZShpbnB1dC52YWx1ZSk7IGlucHV0LnZhbHVlID0gJyc7fX0+KzwvYnV0dG9uPlxuLy8gPC9kaXY+XG4vLyApO1xuLy8gd2luZG93LkFkZE1vdmllcyA9IEFkZE1vdmllcztcblxuY2xhc3MgQWRkTW92aWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfTtcbiAgfVxuaGFuZGxlSW5wdXRDaGFuZ2UoKSB7XG4gICAgdGhpcy5wcm9wcy5hZGRNb3ZpZSgkKCcuZm9ybS1jb250cm9sJykudmFsKCkpO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgdmFsdWU6ICF0aGlzLnN0YXRlLnZhbHVlXG4gICAgLy8gfSlcbiAgICAkKCcuZm9ybS1jb250cm9sJykudmFsKCcnKVxuICB9XG5cbnJlbmRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBoaWRkZW4tc20tZG93blwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICApO1xufVxufVxud2luZG93LkFkZE1vdmllcyA9IEFkZE1vdmllcztcbiJdfQ==