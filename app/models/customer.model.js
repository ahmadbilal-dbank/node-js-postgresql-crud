module.exports = (sequelize, Sequelize, DataTypes) => {
    const Customer = sequelize.define("customer", {
        id :{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true,
        },
        first_name : {
            type: Sequelize.STRING,
            allowNull: false,
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cnic: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        tags: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        dob:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        }
    });
    return Customer;
  };
  