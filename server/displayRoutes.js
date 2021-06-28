/** Keep track of strings in DB cart. */

// If finder is used uncomment the following line of code.
// import { NotFoundError } from './middlewares/expressErrorMiddleware';
const db = require('./database').default;

class Item {
  constructor(name) {
    this.name = name;

    // keep track of all items.
    db.items.push(this);
  }

  /** Return all items in DB array. */

  static findAll() {
    return db.items;
  }
  /** Return items and adds new item in DB array. */

  static AddItem(name) {
    db.items.push(name);
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

  // /** Remove item with matching id. */

  // static remove(name) {
  //   const foundIdx = items.findIndex(v => v.name === name);
  //   if (foundIdx === -1) throw new NotFoundError();

  //   items.splice(foundIdx, 1);
  // }
}

module.exports = Item;
