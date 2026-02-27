import * as connect from "./db/connect.js";
import "./db/models/associations.js";
const bootstrap = async (app, express) => {
  app.use(express.json()); // Json

  await connect.connectionDB();
  await connect.syncModels();
  
};
export default bootstrap;
