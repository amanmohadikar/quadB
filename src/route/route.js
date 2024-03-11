const express = require('express')
const router = express.Router()
const cryptoController = require("../controller/cryptoController")
router.post('/crypto', cryptoController.fetchDataAndStore)
router.get('/getCryptoData', cryptoController.getCryptoData)
module.exports = router;