import {Sequelize} from "sequelize";
const sequelize = new Sequelize('postgres://node_user:node_password@localhost:5432/chatdb')

async function testConnection() :Promise<void>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const synchronizeDatabase = async (): Promise<void> =>{
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
}

export {testConnection, sequelize, synchronizeDatabase}