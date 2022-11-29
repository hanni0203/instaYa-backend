// ********************** imports *********************
import express from 'express';
/* const express = require('express'); */
import './database';
import userRoutes from './routes/userRoutes';


// ************ express() ************
const app = express();

app.use(express.json());

//********* link to routes*************/

// route user
app.use('/user', userRoutes);

app.get('/', (req, res) =>{
    res.json('Bienvenido a mi aplicación');
});





// ************ Set the server to listen ************
app.listen(3001, () => {
    console.log('Server running on port 3001', 'http://localhost:3001');
});


export default app;