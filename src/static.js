
const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

// const staticPath = path.join(__dirname)
// console.log(staticPath)


const staticPath = path.join(__dirname,'../public')
console.log(staticPath)

app.use(express.static(staticPath))

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
