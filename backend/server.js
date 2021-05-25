const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });

const departRouter = require('./routers/departRouter');
const emploRouter = require('./routers/emploRouter');
const ticketRouter = require('./routers/ticketRouter');
const assignRouter = require('./routers/assignRouter');
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true,  useUnifiedTopology: true ,useCreateIndex: true},(err , db)=>{
    if(db){
        console.log("db connected")
    }
    else{
        console.log('db not connected');
    }
}
);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(cookieParser());

app.use('/Depart',departRouter);
app.use('/Employe',emploRouter);
app.use('/ticket',ticketRouter);
app.use('/add',assignRouter);
// app.use('*',verifyToken)


app.listen(PORT, () => {
    console.log(`app listning : localhost:${PORT}`);
});

module.exports= app