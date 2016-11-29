'use strict';

var http = require('http');
var handleRequest = require('request-handler');

var port = 3000;

var ip = '127.0.0.1';

var server = http.createServer(handleRequest);
console.log('Listening on http://' + ip + ":" + port);
server.listen(port, ip);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9iYXNpYy1zZXJ2ZXIuanMiXSwibmFtZXMiOlsiaHR0cCIsInJlcXVpcmUiLCJoYW5kbGVSZXF1ZXN0IiwicG9ydCIsImlwIiwic2VydmVyIiwiY3JlYXRlU2VydmVyIiwiY29uc29sZSIsImxvZyIsImxpc3RlbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxPQUFPQyxRQUFRLE1BQVIsQ0FBWDtBQUNBLElBQUlDLGdCQUFnQkQsUUFBUSxpQkFBUixDQUFwQjs7QUFFQSxJQUFJRSxPQUFPLElBQVg7O0FBRUEsSUFBSUMsS0FBSyxXQUFUOztBQUVBLElBQUlDLFNBQVNMLEtBQUtNLFlBQUwsQ0FBa0JKLGFBQWxCLENBQWI7QUFDQUssUUFBUUMsR0FBUixDQUFZLHlCQUF1QkosRUFBdkIsR0FBMEIsR0FBMUIsR0FBOEJELElBQTFDO0FBQ0FFLE9BQU9JLE1BQVAsQ0FBY04sSUFBZCxFQUFtQkMsRUFBbkIiLCJmaWxlIjoiYmFzaWMtc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG52YXIgaGFuZGxlUmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QtaGFuZGxlcicpXG5cbnZhciBwb3J0ID0gMzAwMDtcblxudmFyIGlwID0gJzEyNy4wLjAuMSc7XG5cbnZhciBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihoYW5kbGVSZXF1ZXN0KTtcbmNvbnNvbGUubG9nKCdMaXN0ZW5pbmcgb24gaHR0cDovLycraXArXCI6XCIrcG9ydCk7XG5zZXJ2ZXIubGlzdGVuKHBvcnQsaXApXG4iXX0=