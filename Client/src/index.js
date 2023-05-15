import React from "react";
import ReactDOM from "react-dom";
import { Sequelize } from "sequelize";

import Rotas from "./Routes/routes"


ReactDOM.render(<Rotas />, document.getElementById("root"));

const sequelize = new Sequelize(
    
)

