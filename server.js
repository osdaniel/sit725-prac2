let express = require('express')
let app = express()

//take file from the public folder
app.use(express.static(__dirname +'/public'));

//listen  to a particular port
let port = 3000;
app.listen(port);
console.log('Server listening on port '+port)