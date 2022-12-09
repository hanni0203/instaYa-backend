// ********************** imports *********************
import express from 'express';
/* const express = require('express'); */
import './database';
import userRoutes from './routes/userRoutes';
import ordenRoutes from './routes/ordenRoutes';
import cors from 'cors';

// ************ express() ************
const app = express();

app.use(express.json());

app.use(cors())

//********* link to routes*************/

// route user
app.use('/user', userRoutes);

// ruta orden
app.use('/orden', ordenRoutes);

app.get('/', (req, res) =>{
    res.json('Bienvenido a mi aplicación');
});





// ************ Set the server to listen ************
app.listen(process.env.PORT || 5000, () => {
    console.log('Server running on port', process.env.PORT || 5000);
});


export default app;