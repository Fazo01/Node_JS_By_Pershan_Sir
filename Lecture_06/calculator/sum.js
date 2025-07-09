const sumrequesthandler=(req,res)=>{
  console.log("In sum handler",req.url)
  const body=[]
  let result;
  req.on('data',chunk=>{
    body.push(chunk)
  })
  req.on('end',()=>{
    const bodyStr=Buffer.concat(body).toString();
    const parems=new URLSearchParams(bodyStr)
    const bodyObj=Object.fromEntries(parems)
   result=Number(bodyObj.first)+Number(bodyObj.second) //Number() to tell that it's number not string
    console.log(result)
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
      <head>
        <title>Calculator</title>
      </head>
      <body>
        <h1>Your sum is ${result}</h1>
      </body>
</html>`);
  })
}
exports.sumrequesthandler=sumrequesthandler;