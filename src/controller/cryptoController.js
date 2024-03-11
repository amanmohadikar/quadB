const cryptoModel = require('../model/cryptpModel')
const axios = require('axios')

async function fetchDataAndStore() {
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const top10Cryptos = Object.values(response.data).slice(0, 10);

        await cryptoModel.deleteMany({});

        await cryptoModel.insertMany(top10Cryptos);
        console.log('Data successfully fetched and stored in the database');
    } catch (error) {
        console.error('Error fetching and storing data:', error.message);
    }
}

 async function  getCryptoData(req, res) {
    try {
      const data = await cryptoModel.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {fetchDataAndStore, getCryptoData}