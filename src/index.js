
const express = require('express');  // import

const app = express();

let name= 'Ram'
let password= 12345

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.all('/all/data', (req, res) => {
    res.send("http wild card method");
  
    
  });  

app.use(loginMiddleware)

app.get('/about', (req, res) => {
    res.json({msg : "Welcome to About Page"});
});

app.get('/about', (req, res) => {
    res.json({firstName : 'Tony',
        lastName: 'Stark'
    });
});


app.get('/about', (req, res) => {
    res.json([{firstName : 'Tony',
              lastName: 'Stark'},
              {firstName : 'Rahul',
               lastName: 'Ram'
    }]);
});


app.get('/about', (req, res) => {               //html tag
    res.send("<h1> Welcome to about page </h1>");
});


app.get('/about', (req, res) => {               //multipla tag
    res.write("<h1> Welcome to about page </h1>");
    res.write("<h1> Welcome to about page </h1>");
    res.send()
});

app.post('/users/new',(req,res)=>{
    res.send("users created");
})

app.put('/users/new',(req,res)=>{
    res.send("users ");
})

app.delete('/users/new',(req,res)=>{
    res.send("users created");
})

function loginMiddleware(req,res){
    console.log("I am the login Middleware")
 
}

function loginMiddleware(req,res,next){
    console.log("I am the login Middleware")
    next()
}

function loginMiddleware(req,res,next){
    if(name=="Ram" && password==1235){
        next()
    }
    else{
        res.send('Cannot Authenticate the user')
    }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
