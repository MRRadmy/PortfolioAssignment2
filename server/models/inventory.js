//Created by: Mahpara Rafia Radmy - Student Number: 301176893 - Created on: October 23, 2021

let mongoose = require('mongoose');

// model class
let contactModel = mongoose.Schema({
    Contact_Name: String,
    Contact_Number: String,
    Email_Address: String
},
{
    collection: "inventory"
});

module.exports = mongoose.model('inventory', inventoryModel);