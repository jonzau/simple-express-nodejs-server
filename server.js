var express = require('express')
var cors = require('cors')
var app = express()

const PORT = 1337;

app.use(cors())

app.get('/', onRequest);

app.get('/:id', onRequest);

app.listen(PORT, function () {
  console.log(`CORS-enabled server listening on port ${PORT}`);
});

function onRequest(req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!' + ( req.params.id ? ` id: ${req.params.id}` : ' No id provided.')});
}
