let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//route to the model
let Inventory = require('../models/inventory');

module.exports.displayInventoryList = (req, res, next) => {
    Inventory.find((err, InventoryList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('inventory/list', {title: 'Contacts List', InventoryList: InventoryList, displayName: req.user ? req.user.displayName : ''});
        }
    });
}

// Contact add page
module.exports.displayAddPage = (req, res, next) => {
    res.render('inventory/add', {title: 'Add Contact', displayName: req.user ? req.user.displayName : ''})
}

// Processing contact add page
module.exports.processAddPage = (req, res, next) => {
    let newInventory = Inventory({
        "Contact_Name": req.body.Contact_Name,
        "Contact_Number": req.body.Contact_Number,
        "Email_Address": req.body.Email_Address
    });

    Inventory.create(newInventory, (err, Inventory) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/inventory-list')
        }
    });
}

// edit contact page
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Inventory.findById(id, (err, editInventory) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('inventory/edit', {title: 'Edit Contact', InventoryList: editInventory, displayName: req.user ? req.user.displayName : ''})
        }
    });
}

// processing edit contact page
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedInventory = Inventory({
        "_id": id,
        "Contact_Name": req.body.Contact_Name,
        "Contact_Number": req.body.Contact_Number,
        "Email_Address": req.body.Email_Address
    });

    Inventory.updateOne({_id: id}, updatedInventory, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/inventory-list')
        }
    });
}

// module to delete contact
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Inventory.remove ({_id: id}, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/inventory-list')
        }
    });
}