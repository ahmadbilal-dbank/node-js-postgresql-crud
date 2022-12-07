module.exports = (sequelize, Sequelize, DataTypes) => {
    const Transaction = sequelize.define("transaction", {
        id :{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true,
        },
        source_account_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: 'accounts',
            referenceskey: 'id',
        },  
        target_account_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: 'accounts',
            referenceskey: 'id',
        },
        initiation_date : {
            type: DataTypes.DATE,
            allowNull: false,
        },
        completion_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        channel: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        medium: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tag: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        currency: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        device:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        }
    });
    return Transaction;
  };
  