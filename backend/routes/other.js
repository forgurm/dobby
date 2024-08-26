const express = require('express');
const router = express.Router();
const db = require('../db');  // Use your existing db connection logic from db.js

// GET - Retrieve all keywords from the database

router.get('/other/keywords', async (req, res) => {
  try {
    console.log('backend : keyworlds')
    const keywords = await db.query('SELECT keyword FROM keyword_filter');
    res.json(keywords.map(row => row.keyword));
  } catch (error) {
    res.status(500).json({ error: 'Error fetching keywords' });
  }
});


// Add a new keyword
router.post('/other/keywords', async (req, res) => {
  const { keyword } = req.body;
  try {
    await db.query('INSERT INTO keyword_filter (keyword) VALUES (?)', [keyword]);
    res.status(201).json({ message: 'Keyword added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding keyword' });
  }
});

// Delete a keyword
router.delete('/other/keywords/:keyword', async (req, res) => {
  const { keyword } = req.params;
  try {
    await db.query('DELETE FROM keyword_filter WHERE keyword = ?', [keyword]);
    res.json({ message: 'Keyword deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting keyword' });
  }
});


module.exports = router;