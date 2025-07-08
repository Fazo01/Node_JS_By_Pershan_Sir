const http = require("http");
const UserrequestHandle=require('./user')
const server = http.createServer(UserrequestHandle);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
