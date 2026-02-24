// models/Employee.js
import { DataTypes } from "sequelize";
import { sequelize } from "../connect.js";


const Employee = sequelize.define("Employee", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING(50),
  job: DataTypes.STRING(50),
  email: DataTypes.STRING(50),
});


export default Employee;