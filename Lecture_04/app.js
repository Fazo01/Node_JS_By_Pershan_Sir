const http=require('http')
const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers)
  // process.exit();
  if(req.url=='/'){
  res.setHeader('content-type','text/html')
  res.write('<html>')
  res.write('<head><title>Complete Coding</title></head>')
  res.write('<head><h1>Welcome to home</h1></head>')
  res.write('</html>')
  return res.end();
  }else if(req.url=='/products'){
  res.setHeader('content-type','text/html')
  res.write('<html>')
  res.write('<head><title>Complete Coding</title></head>')
  res.write('<head><h1>Check our Product</h1></head>')
  res.write('</html>')
  return res.end();}
  res.setHeader('content-type','text/html')
  res.write('<html>')
  res.write('<head><title>Complete Coding</title></head>')
  res.write('<head><h1>like/subs/comment</h1></head>')
  res.write('</html>')
  res.end();
  
})
const PORT=3000
server.listen(PORT,()=>{
  console.log(`Server is running on port http://localhost:${PORT}`)
})