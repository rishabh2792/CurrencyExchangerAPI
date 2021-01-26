const currencyController = require('../controllers/currency_api');

module.exports = (app) => {

    app.get('/api/get_currency', currencyController.getCurrency);

    app.get('/api/get_currency/:base', currencyController.getCurrencyByBase);

    app.post('/api/post_currency',currencyController.postCurrency);

}