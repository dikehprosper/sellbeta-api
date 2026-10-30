
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = process.env.DATABASE_URL
    ? new Sequelize(process.env.DATABASE_URL, {
        dialect: "postgres",
        logging: false,
        dialectOptions:
            process.env.DB_SSL === "true"
                ? { ssl: { require: true, rejectUnauthorized: false } }
                : {},
    })
    : new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST || "localhost",
            port: Number(process.env.DB_PORT || 5432),
            dialect: "postgres",
            logging: false,
        }
    );

async function connectDatabase() {
    await sequelize.authenticate();
    console.log("PostgreSQL connected");
}

module.exports = { sequelize, connectDatabase };
