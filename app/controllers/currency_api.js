const CurrencyModel = require('../models/currency');
const https = require('https');
module.exports = {

    getCurrency: async (req, res) => {
        try {
            const currency = await CurrencyModel.find();
            return res.send(currency);

        } catch (error) {
            res.send({ error: error.message });
        }
    },

    getCurrencyByBase: (req, res) => {
        try {
            let base = req.params.base;
            let data = '';
            https.get("https://api.exchangeratesapi.io/latest?base=" + base, (resp) => {
                resp.setEncoding('utf8');
                resp.on('data', (d) => {
                    data = data + d;
                })
                resp.on('end', () => {
                    res.send(JSON.parse(data));
                })
            });

        } catch (error) {
            return res.send({ error: error.message });

        }
    },

    postCurrency: async (req, res) => {
        
        try {
            const country = new CurrencyModel({
                country: req.body.country,
                code: req.body.code
            });
    
            await country.save();

            return res.send({success:true});
            
        } catch (error) {
            return res.send({error:error.message});
        }


    }



}