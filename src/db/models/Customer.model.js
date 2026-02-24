import { DataTypes } from "sequelize";
import { sequelize } from "../connect.js";

const Customer = sequelize.define("Customer", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING(50),
  phone: DataTypes.STRING(15),
  email: DataTypes.STRING(50),
  national_id: DataTypes.STRING(20),
  address: DataTypes.STRING(50),
});
export default Customer;