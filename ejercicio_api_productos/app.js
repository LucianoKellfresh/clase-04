const express = require("express");
const app = express();
const routeProductos = require("./routes/routes");
const errorHandler = require("./middlewares/errorHandler"); 
app.use(express.json());
app.use("/productos",routeProductos)
app.use(errorHandler)


const port = 3000;

app.listen(port , () => {
  console.log(`Servidor Express.js en funcionamiento en el puerto ${port}`);
});

