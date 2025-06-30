const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/getAllCurrencies", async (req, res) => {
    const nameURL = `https://openexchangerates.org/api/currencies.json?app_id=43d538304bb348bcbf323e690d3c02f3`;

    try{
        const namesResponse = await axios.get(nameURL);
        const nameData = namesResponse.data;
    
        return res.json(nameData);

    }catch(err){
        console.error(err);
    } 
});

app.get("/convert", async(req, res) => {
    const {date, sourceCurrency, targetCurrency, amountInSourceCurrency} = req.query;

    try{

        const dateURL = `https://openexchangerates.org/api/historical/${date}.json?app_id=43d538304bb348bcbf323e690d3c02f3`;
        const dataResponse = await axios.get(dateURL);
        const rates = dataResponse.data.rates;

        const sourceRate = rates[sourceCurrency];
        const targetRate = rates[targetCurrency];

        const targetAmount = (targetRate / sourceRate) * (amountInSourceCurrency);

        return res.json(targetAmount.toFixed(2));

    }catch(err){
        console.error(err);
    }
});

app.listen(5000, () => {
    console.log("Server Started")
});