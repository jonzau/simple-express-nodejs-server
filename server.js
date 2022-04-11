var express = require('express')
var cors = require('cors')
var app = express()

const PORT = process.env.PORT || 1337;

app.use(cors())

app.get('/', onRequest);

app.get('/:id', onRequest);

app.listen(PORT, function () {
  console.log(`CORS-enabled server listening on port ${PORT}`);
});

function onRequest(req, res, next) {
  console.log(`Request: ${req.method} ${req.hostname} ${req.originalUrl} from ${req.ip} \n ${JSON.stringify({
    method: req.method,
    hostname: req.hostname,
    originalUrl: req.originalUrl,
    ip: req.ip,
    params: req.params
  })}`);
  res.json({msg: 'This is CORS-enabled for all origins!' + ( req.params.id ? ` id: ${req.params.id}` : ' No id provided.')});
}
