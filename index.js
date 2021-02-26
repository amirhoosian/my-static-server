const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    const fileName = path.join(process.cwd(), req.url)
    try{
        fs.lstatSync(fileName)
    }catch{
        res.writeHead(404, {"Conten-Type" : "text/html"})
        res.write('not found')
       return res.end()
    }

    fs.readFile(fileName, "UTF-8" ,(err, data) => {
        if(err) console.log(err)

        res.write(data)
        res.end()
    })
})


server.listen(3000, () => console.log('server running'))
