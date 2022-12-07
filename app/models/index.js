const dbConfig = require("../config/db.config.js");

const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require("./customer.model.js")(sequelize, Sequelize, DataTypes);
db.accounts = require("./account.model.js")(sequelize, Sequelize, DataTypes);
db.transactions = require("./transaction.model.js")(sequelize, Sequelize, DataTypes);


db.accounts.belongsTo(db.customers, { foreignKey: "customer_id" });
db.transactions.belongsTo(db.accounts, { foreignKey: "source_account_id" });
db.transactions.belongsTo(db.accounts, { foreignKey: "target_account_id" });


module.exports = db;
