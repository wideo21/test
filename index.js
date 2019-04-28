let express = require('express');
let path = require('path');
let app = express();

app.use(express.static(path.join(__dirname,'view')));
console.log(__dirname);
app.listen('3000',function(){
    console.log("3000번대 실행")
});