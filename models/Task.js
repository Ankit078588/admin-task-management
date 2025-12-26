import { DataTypes } from "sequelize";
import { sequelize } from "../lib/db.js";


export const Task = sequelize.define("Task", {
    task_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    task_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    task_type: {
      type: DataTypes.JSON,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, { timestamps: true });
  