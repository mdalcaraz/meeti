const Sequelize = require('sequelize');
const dotenv = require("dotenv")

dotenv.config({ path: '.env' })

module.exports = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS ?? '', {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define: {
        timestamp: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
})

// module.exports = new Sequelize('meeti', '', '', {
//     host: '127.0.0.1',
//     port: '5432',
//     dialect : 'postgres',
//     pool :{
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
//     // define: {
//     //     timestamps : false
//     // },
//     // logging : false
// });