const express = require('express');

const Item = require('../item');

const router = express.Router();

/** GET / => [item, ...] */

router.get('', (req, res) => res.json(Item.findAll()));

/** POST / {name} => new-item */

router.post('', (req, res) => {
  const newItem = new Item(req.body.name);
  return res.json({ item: newItem });
});

/** DELETE /[name] => "Removed" */

router.delete('/:name', (req, res) => {
  Item.remove(req.params.name);
  return res.json({ message: 'Deleted' });
});

module.exports = router;
