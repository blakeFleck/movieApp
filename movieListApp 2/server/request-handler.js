var requestHandler = function (req, res){

  console.log("Serving request type "+ req.method + " for url "+ req.url);

  var statusCode = 200;

  // var headers = defaultCorsHeaders;

  res.end();
}

module.exports = requestHandler;
