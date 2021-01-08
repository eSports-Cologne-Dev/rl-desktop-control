const nstatic = require('node-static');

const file = new nstatic.Server(`${__dirname}/public`);

require('http')
  .createServer(function StaticServer(req, resp) {
    req
      .addListener('end', function StaticServe() {
        file.serve(req, resp);
      })
      .resume();
  })
  .listen(9990);
