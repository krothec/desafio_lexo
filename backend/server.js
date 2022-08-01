
import jsonServer from "json-server";
import { login, authMiddleware } from "./Handlers/auth.js";

const server = jsonServer.create();
const router = jsonServer.router(`./db.json`);
const middlewares = jsonServer.defaults();

server
  .use(middlewares)
  .use(jsonServer.bodyParser)
  .post(`/login`, login)
  .use(authMiddleware)
  .use(router);

server.listen(process.env.PORT || 8000, () => {
  console.log(`JSON Server is running`, `http://localhost:8000`)
})
