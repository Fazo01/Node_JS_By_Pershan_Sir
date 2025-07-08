const http=require('http')
const server=http.createServer((req,res)=>{
  if(req.url==='/'){
        res.setHeader('content-type','text/html')
      res.write('<html>')
      res.write('<head><title>Complete Coding</title></head>')
      res.write('<li><a href="/home">Home</a></li>')
      res.write('<li><a href="/men">Men</a></li>')
      res.write('<li><a href="/women">women</a></li>')
      res.write('<li><a href="/kid">Kids</a></li>')
      res.write('<li><a href="/cart">Cart</a></li>')
      return res.end()
  }
  else if(req.url.toLowerCase()==='/home'){
  res.setHeader('content-type','text/html')
    res.write('<h1>Welcome to home</h1>')
    return res.end()
  }
  else if(req.url.toLowerCase()==='/men'){
  res.setHeader('content-type','text/html')
    res.write('<h1>Welcome to men</h1>')
    return res.end()
  }
  else if(req.url.toLowerCase()==='/women'){
  res.setHeader('content-type','text/html')
    res.write('<h1>Welcome to women</h1>')
    return res.end()
  }
  else if(req.url.toLowerCase()==='/kid'){
  res.setHeader('content-type','text/html')
    res.write('<h1>Welcome to kid</h1>')
    return res.end()
  }
  else if(req.url.toLowerCase()==='/cart'){
  res.setHeader('content-type','text/html')
    res.write('<h1>Welcome to cart</h1>')
    return res.end()
  }
    res.setHeader('content-type','text/html')
    res.write('</html>')
  
});
const PORT=3001
server.listen(PORT,()=>{
  console.log(`Server running at http://localhost:${PORT}`)
})