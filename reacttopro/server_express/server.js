const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/*
    command 
        "app.use" This command use to tell the express ,that has config middle ware
*/
app.use(bodyParser.urlencoded({ extended: true }))  //config for support form submit
app.use(bodyParser.json({ type: '*/*' })); //config for support body JSON

app.use((req, res, next) => {    
    console.log('middle ware')    
    next() 
}) ;


app.get('/', (req, res) => {
    // http://localhost:8001
    res.send('Root Page Hello NodeJS') 
});

app.get('/member', (req, res) => {
    // http://localhost:8001/member
    console.log('Member Page')
    res.send('Member Page') 
});

app.get('/order', (req, res) => {
    // http://localhost:8001/order
    console.log('Order page')
    res.send('Order Page') 
});

app.get('/order/:orderId', (req, res) => {
    // http://localhost:8001/order/2
    res.send('Order Page Id = '+req.params.orderId) 
});

app.post('/order', (req, res) => {
    console.log(req.body)    
    res.json({ status: 'ok' }) 
}); 

app.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next route
    if (req.params.id === '0') next('route')
    // otherwise pass the control to the next middleware function in this stack
    else next()
  }, function (req, res, next) {
    // render a regular page
    res.send('regular') 
    // res.render('regular')
  });
  
  // handler for the /user/:id path, which renders a special page
  app.get('/user/:id', function (req, res, next) {
    // res.render('special')
    // res.send('special') 
    res.json({success : 'special'}) 
  });

app.listen(8001,()=>{
    console.log('Ready on http://localhost:8001')
});