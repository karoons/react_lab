const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/*
    command 
        "app.use" This command use to tell the express ,that has config middle ware
*/
app.use(bodyParser.urlencoded({ extended: true }))  //config for support form submit
app.use(bodyParser.json({ type: '*/*' })); //config for support body JSON


app.get('/', (req, res) => {
    // http://localhost:8001
    res.send('Root Page Hello NodeJS') 
});

app.get('/member', (req, res) => {
    // http://localhost:8001/member
    res.send('Member Page') 
});

app.get('/order', (req, res) => {
    // http://localhost:8001/order
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

app.listen(8001,()=>{
    console.log('Ready on http://localhost:8001')
});