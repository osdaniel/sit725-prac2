let express = require('express')
let app = express()

//take file from the public folder
app.use(express.static(__dirname +'/public'));

//listen  to a particular port
let port = 3000;
app.listen(port);
console.log('Server listening on port '+port)

let addition = (numA, numB)=> {
    let sum = numA + numB;
    return sum;
}

app.get('/addition',function(req,res){
    let numA=parseInt(req.query.numA);
    let numB=parseInt(req.query.numB);
    let sum=addition(numA,numB);
    res.send('Sum of numbers is:' +sum);
})
