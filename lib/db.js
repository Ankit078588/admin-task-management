import "dotenv/config";
import { Sequelize } from "sequelize";


export const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    { host: process.env.DB_HOST, dialect: "mysql" }
);



export const connectDB = async function () {
    try {
        await sequelize.authenticate();
        console.log('Database Connected...');

        await sequelize.sync();
        console.log('Database Synced...')
    } catch(e) {
        console.log('Error connecting DB:')
        console.log(e);
    }
}



