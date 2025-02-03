const fs = require('fs')
fs.stat('fs.js',(err,stats)=>{
    if(err){
        return console.log(err)
    }
    // console.log(stats)
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.size)
})