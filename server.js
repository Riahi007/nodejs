
const http=require('http')





const app=http.createServer(function(req,res){
    res.setHeader('Content-type',"text/html")
        res.write('<h1>Hello Node!!!!</h1>')
        res.end()
})

app.listen(3000)
