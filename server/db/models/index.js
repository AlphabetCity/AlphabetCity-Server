const User = require('./user')
const Item = require('./item')
const ItemCategory = require('./itemCategory')


//Associations

Item.belongsTo(ItemCategory)
ItemCategory.hasMany(Item)

//Items will have "getOwner", "setOwner", and "createOwner"
Item.belongsTo(User)
//Owners will have "getItems", "setItems", "createItem", "addItem", "addItems", "removeItem", "removeItems", "hasItem", "hasItems", and "countItems"
User.hasMany(Item)


/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  User,
  Item,
  ItemCategory
}
