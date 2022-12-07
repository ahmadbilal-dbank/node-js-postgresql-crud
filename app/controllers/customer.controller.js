const db = require("../models");
const Customer = db.customers;
const Account = db.accounts;
const Transaction = db.transactions;
const Op = db.Sequelize.Op;

// Process data from the database.
exports.processData = async (req, res) => {
    let accounts = await Account.findAll({});
    for(let account of accounts) {
        account.customer_id = Math.floor(Math.random() * 100) + 1;
        account.save();
    }

    let transactions = await Transaction.findAll({});
    for(let transaction of transactions) {
        let accountIds = [];
        while(accountIds.length < 2){
            let num = Math.floor(Math.random() * 1000) + 1;
            if(accountIds.indexOf(num) === -1) accountIds.push(num);
        }
        transaction.source_account_id = accountIds[0];
        transaction.target_account_id = accountIds[1];

        let date = new Date(transaction.initiation_date);
        date.setDate(date.getDate()+ Math.floor(Math.random() * 10) + 1);
        transaction.completion_date = date;

        transaction.save();
    }
    res.send("Data is processed successfully");
  };