var express = require('express');
var router = express.Router();
//pitää olla fetch täällä
var fetch = require('node-fetch');

//hakee api datamusesta tiedot
router.route('/:word')
  .get(function (req, res) {
    // res.send('respond with a resource');
    fetch("https://api.datamuse.com//words?sl=" + req.params.word)
      .then(function (res) {
        //palauttaa json-oliona
        return res.json()
      })
      //lähettää tiedot takaisin restclientille
      .then(function (data) {
        // console.log(data)
        res.json(data)
      })
  });

module.exports = router;