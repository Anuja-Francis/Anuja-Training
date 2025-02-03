const fs = require('fs')
fs.opendir('d:\\training',(err,dir)=>{
    if(err){
        return console.log(err)
    }
    console.log(dir)
    console.log(dir.path)
})