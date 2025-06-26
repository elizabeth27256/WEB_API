// require('dotenv').config();

import dotenv  from "dotenv";
import express  from "express";
import mongoose  from "mongoose";
import tareasRoutes from "./routes/tareas"

dotenv.config()


let express = require('express');
let tareasRoutes = require('./routes/tareas');
let mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((err) => console.error("Error", err));

// console.log(process.env.MONGO_URI) //Esto sirve para poner nuestras credenciales 

let app = express();

app.use(express.json())
app.use('/tareas', tareasRoutes);

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})
.listen

