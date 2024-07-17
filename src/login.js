
const express = require('express');
const app = express();
const port = 3000;


let data = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

app.post('/api/data', (req, res) => {
  res.json(data);

});

app.get('/api/data/:name',(req,res)=>{     //Route Parameter
  console.log(req.params)
})

app.get('/api/data/:name',(req,res)=>{     //To access the value
  console.log(req.params.name)
})

app.get('/api/data/:name',(req,res)=>{    
  const {name}=req.params       //to find data from array of objects

  const find=data.find((m)=>m.name ===name)
  res.send(find)
  // console.log(find)
})

app.all('/all/data', (req, res) => {
  res.send("http wild card method");

  
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
