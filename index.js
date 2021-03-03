const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    const fileName = path.join(process.cwd(), `web\\${req.url}`)
    try{
     stat = fs.lstatSync(fileName)
    }catch{
        res.writeHead(404, {"Content-Type" : "text/html"})
        res.write('not found')
       return res.end()
    }

    if(stat.isFile()){
    fs.readFile(fileName, "UTF-8" ,(err, data) => {
        if(err) console.log(err)
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write(data)
        res.end()
    })
    return
}else if(stat.isDirectory()){
    res.writeHead(302, {"Location" : "index.html"})
    res.end
}
})


server.listen(3000, () => console.log('server running'))
