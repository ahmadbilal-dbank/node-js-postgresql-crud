module.exports = (sequelize, Sequelize, DataTypes) => {
    const Account = sequelize.define("account", {
        id :{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true,
        },
        account_title : {
            type: Sequelize.STRING,
            allowNull: false,
        },
        opening_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        transaction_limit: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        currency: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        account_type: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: 'customers',
            referenceskey: 'id',
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        }
    });
    return Account;
  };
  