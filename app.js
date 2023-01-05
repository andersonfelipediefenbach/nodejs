const express = require("express");

const app = express();

app.get("/rota-inicial", (request, response) =>{
    return response.json({
        message: "Acessou a rota inicial",
    });
});

app.listen(4002,() => console.log("Servidor rodando na porta 4002")); 
