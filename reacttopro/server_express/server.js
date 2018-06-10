const express = require('express');
const app = express();


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

app.listen(8001,()=>{
    console.log('Ready on http://localhost:8001')
});