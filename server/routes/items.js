const express = require('express');

const Item = require('../item');

const router = express.Router();

/** GET / => [item, ...] */

router.get('', (req, res) => res.json(Item.findAll()));

/** POST / {name} => new-item */

router.post('', (req, res) => {
  Item.addItem(req.body.name);
  return res.json({ message: 'item added successfully' });
});

/** DELETE /[name] => "Removed" */

router.delete('', (req, res) => {
  Item.remove();
  return res.json({ message: 'Deleted' });
});

module.exports = router;
