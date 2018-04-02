var express = require('express');
var router = express.Router();
var mysql      = require('mysql');


var connection = mysql.createConnection({
    host     : '10.4.12.19',
    user     : 'root',
    password : '123@qwe',
    database : 'junctionbox'
});
connection.connect();

router.get('/admin',function (req, res) {
    connection.query("SELECT datavalue FROM statistics WHERE moduleno = '0712BB1D' AND datatype='electricity'", function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send({results:results,msg:'ok'})
    });
})
router.post('/',function (req, res) {
    res.send('post')
})

module.exports = router;