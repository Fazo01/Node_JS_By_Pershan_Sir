const fs=require('fs')
fs.writeFile("output.txt","write file",(err)=>{
  if (err) console.log(err)
  else console.log("File written succesfully")
})