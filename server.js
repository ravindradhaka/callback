const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

app.get('/MarcoPolo', routes.marcopolo);
app.get('/TopSecret', routes.topsecret);
app.get('/parseInvoiceNumbers', routes.parseinvoicenumbers);
app.get('/MarcoPolo', routes.marcopolo);
app.get('/TopSecret', routes.topsecret);
app.get('/parseInvoiceNumbers', routes.parseinvoicenumbers);

app.listen(3000, () => {
    console.log("Server is dsdlistening on port 3000");
});
