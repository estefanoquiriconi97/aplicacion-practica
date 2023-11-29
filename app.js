const epxress = require('express');

const app = epxress();

app.get('/', (req, res)=> {
    res.send('Hola mundo');
})

const port = 5000;

app.listen(port, ()=> {
    console.log('http://localhost:' + port);
})