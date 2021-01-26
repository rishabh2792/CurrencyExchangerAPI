const express = require('express'),
    cors = require('cors'),

    app = express();

require('./app/utils/db');

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use(cors());

require('./app/routes/currency_routes')(app);

app.listen(8080, () => {
    console.log('Server started')
});