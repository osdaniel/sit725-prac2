let express = require('express')
let app = express()

//take file from the public folder
app.use(express.static(__dirname +'/public'));

//listen  to a particular port
let port = 3000;
app.listen(port);
console.log('Server listening on port '+port)

//create function to get the sum of two numbers
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

let accounts = [
    {id:1, name:'Alex', deposit:5},
    {id:2, name:'Sarah', deposit:5},
    {id:3, name:'Jim', deposit: 15}
]

app.get('/array', function(req){
    return res.send (Object.values(accounts))
});