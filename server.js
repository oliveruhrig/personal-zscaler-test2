var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.set('json spaces', 2); // number of spaces for indentation
app.use(express.json())    // <==== parse request body as JSON

const ldapAPI = require('./api/index');

app.use('/api', ldapAPI);

app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log( err );
  response.status(500).send('Something broke!')
});


app.listen(port, (err) => {
  if (err) {
      return console.log('something bad happened', err)
  }

  console.log(`github-admin-ldap-server: ${process.version}, port: ${port}`);
  

  //process.exit(0);
});

