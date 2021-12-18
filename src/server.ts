import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes/index";

dotenv.config();

const server = express();

server.set("view engine", "mustache"); //confira o template
server.set("views", path.join(__dirname, "views")); //onde vai ser as paginas de visualizações
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

// Rotas
server.use(mainRoutes);

server.use((req, res) => {
  res.send("página não encontrada!");
});

server.listen(process.env.PORT);
