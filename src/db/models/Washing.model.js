import { DataTypes } from "sequelize";
import { sequelize } from "../connect.js";

const Washing = sequelize.define("Washing", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: DataTypes.STRING(20),
  cost: DataTypes.FLOAT,
  Washing_date: DataTypes.DATE,

  customer_id: DataTypes.INTEGER,
  car_id: DataTypes.INTEGER,
  employee_id: DataTypes.INTEGER,
});

export default Washing;