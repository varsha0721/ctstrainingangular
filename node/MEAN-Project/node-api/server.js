const express = require('express'); 
const app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
// const port = 8080;
const PORT = process.env.PORT || 8080;
const employeeRoutes = require("./routes/employee");

// app.listen(port, (req, res) => {
//     console.log("hello");
// })

mongoose.connect('mongodb://localhost/employeedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get('/', (req,res) => {
    res.status(200).json({
        error: false,
        message: 'get all employees'
    });
});


// (if we have limited no of models then we can use this approach)

// app.get('/api/v1/employee', (req,res) => {
//     res.status(200).json({
//         error: false,
//         message: 'get all employees from api'
//     });
// });

// app.post('/', (req,res) => {
//     res.status(201).json({
//         error: false,
//         message: 'post all employees'
//     });
// });

// app.put('/', (req,res) => {
//     res.status(200).json({
//         error: false,
//         message: 'put all employees'
//     });
// });

// app.delete('/', (req,res) => {
//     res.status(200).json({
//         error: false,
//         message: 'delete all employees'
//     });
// });


// (if we have different models than we have so many methods,
//   as a result it will unnecessrey load our server)

// (in that case we use this appeoach)


// middleware
app.use(express.json())
app.use(morgan('dev'));
app.use('/api/v1/employee', employeeRoutes);

app.listen(PORT, () => {
        console.log("server is running :" + PORT );
    })
    
// (try to make server.js as clean as possible)