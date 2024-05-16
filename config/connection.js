const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.PSQLDB_URL) {
    sequelize = new Sequelize(process.env.PSQLDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            dialect: 'postgres',
            port: 5432,
        }
    )
};

module.exports = sequelize;