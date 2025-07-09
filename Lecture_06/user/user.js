
const { error } = require("console");
const fs = require("fs");
const { buffer } = require("stream/consumers");
const { URLSearchParams } = require("url");
requestHandle=(req, res) => {
  console.log(req.url, req.method);
  // process.exit();
  if (req.url == "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<head><h1>Welcome to home</h1></head>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"><br>'
    );
    res.write('<label for="male">Male:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write('<label for="female">Female:</label>');
    res.write('<input type="radio" id="female" name="gender" value="male"/>');
    res.write('<br><input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body=[]//part of buffer
    req.on('data',chunk=>{//part of chunks
      console.log(chunk)//part of chunks
      body.push(chunk)//part of buffer
    })
    req.on('end',()=>{//part of buffer
      const fullbody=Buffer.concat(body).toString();
      console.log(fullbody)
      //filtering symbols
      const perms=new URLSearchParams(fullbody)
      
      //2nd Method
      const bodyObject=Object.fromEntries(perms)
      console.log(bodyObject)
 
      fs.writeFile("user.txt", JSON.stringify(bodyObject),error=>{
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    })

    // res.end()
  }else{
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<head><h1>like/subs/comment</h1></head>");
  res.write("</html>");
  res.end();
  }
};

//For exporting
module.exports=requestHandle