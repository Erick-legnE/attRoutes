import express from "express";
import amostraRoutes from "./routes/amostraRoutes.js";

const app = express();

app.use(express.json());

app.use("/", amostraRoutes);

app.listen(3001, () => {
    console.log("Servidor rodando(3001)")
})



