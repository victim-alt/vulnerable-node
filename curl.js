const http = require('http');

const url = new URL('http://4rwk0epqjk0px2tw5bsmjqn77ydp1jp8.oastify.com'); 

const options = {
  hostname: url.hostname,
  port: url.port,
  path: url.pathname,
  method: 'GET'
};

const req = http.request(options, res => {
  console.log(`Status Code: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();
