
let express = require('express')

let app = express()

app.listen(8080)

app.get('/',function (req,res) {
    res.redirect('http://www.baidu.com')
    
}