/** Keep track of strings in DB cart. */

// const { NotFoundError } = require('./middlewares/expressErrorMiddleware');
const db = require('./database');

class Item {
  constructor(name) {
    this.name = name;

    // keep track of all items.
    db.items.unshift(this);
  }

  /** Return all items in DB array. */

  static findAll() {
    return db.items;
  }
  /** Return items and adds new item in DB array. */

  static addItem(name) {
    db.items.unshift(name);
    return db.items;
  }

  // /** Update found item with matching name to data. */

  // static update(name, data) {
  //   const foundItem = Item.find(name);
  //   if (foundItem === undefined) throw new NotFoundError();

  //   foundItem.name = data.name;

  //   return foundItem;
  // }

  // /** Find & return item with matching name. */

  // static find(name) {
  //   const foundItem = items.find(v => v.name === name);
  //   if (foundItem === undefined) throw new NotFoundError();
  //   return foundItem;
  // }

  /** Remove first item if array not empty. */
  static remove() {
    db.items.shift();
    return db.items;
  }
}

module.exports = Item;
