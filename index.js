let express = require('express');
let app = express();

app.get('/',function(req,res){
    res.send('hello woasdd')
});
app.listen('3000',function(){
    console.log("3000번대 실행")
});