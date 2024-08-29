const express = require('express');
const router = express.Router();
const db = require('../db');  // DB 연결

// /botList 경로 처리
router.get('/botList', async (req, res) => {
  try {
    console.log('Fetching bot list...');
    
    // SQL 쿼리로 데이터 가져오기
    const [rows] = await db.query('SELECT * FROM bot_info LIMIT 5');
    
    console.log('SQL Query Rows:', rows);  // 데이터가 배열로 출력됨
    
    // 무조건 배열로 반환
    res.status(200).json(rows);  // rows가 배열 형태이므로 그대로 반환
  } catch (error) {
    console.error('Error in GET /botList:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Member List (회원 목록) - GET /main/memberList
router.get('/memberList', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users');  // 회원 목록 데이터를 가져옴
    res.status(200).json(rows);  // 회원 목록 반환
  } catch (error) {
    console.error('Error in GET /main/memberList:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Symbol Status (심볼 상태) - GET /main/symbolStatus
router.get('/symbolStatus', async (req, res) => {
  try {
    // 거래소별로 그룹화하고 카운트를 세는 쿼리
    const [rows] = await db.query(`
      SELECT exchange_code, exchange_name, COUNT(*) AS count
      FROM exchange_info
      GROUP BY exchange_code, exchange_name
    `);
    
    res.status(200).json(rows);  // 그룹화된 결과를 JSON으로 반환
  } catch (error) {
    console.error('Error in GET /main/symbolStatus:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Symbol List (심볼 목록) - GET /main/symbolList
router.get('/symbolList', async (req, res) => {
  try {
    // 심볼명이 비어 있고 최근 5개만 가져오는 쿼리
    const [rows] = await db.query(`
      SELECT * 
      FROM exchange_info 
      WHERE symbol_name IS NULL 
      ORDER BY id DESC  -- id로 변경 가능
      LIMIT 5
    `);

    res.status(200).json(rows);  // 결과를 JSON으로 반환
  } catch (error) {
    console.error('Error in GET /main/symbolList:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;