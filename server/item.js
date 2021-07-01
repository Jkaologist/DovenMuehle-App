/** Keep track of strings in database array. */

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

  /** Remove first item if array not empty. */
  static remove() {
    db.items.shift();
    return db.items;
  }
}

module.exports = Item;
