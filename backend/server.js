const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// 라우트 파일 가져오기
const { router: authRoutes, verifyToken } = require('./routes/auth');
const userRoutes = require('./routes/user');
const botRoutes = require('./routes/bot');
const calendarRoutes = require('./routes/calendar');
const symbolRoutes = require('./routes/symbol');
const otherRoutes = require('./routes/other');
const mainRoutes = require('./routes/main');  // mainRoutes를 올바르게 가져오기

dotenv.config();

const app = express();

console.log('Starting server setup...');
app.use(bodyParser.json({ limit: '50mb' }));

console.log('Configuring CORS...');
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

console.log('Setting up static file serving...');
app.use('/static', express.static(path.join(__dirname, 'public')));

console.log('Setting up /auth route...');
app.use('/auth', authRoutes);

// app.use((req, res, next) => {
//   console.log(`Incoming request to ${req.path}`);
//   if (req.path.startsWith('/auth') || req.path.startsWith('/main')) {
//     console.log(`auth`);
//     return next();
//   }else{
//     console.log(`error`);
//   }
//   verifyToken(req, res, next);
// });

console.log('Setting up user routes...');
app.use('/user', userRoutes);

console.log('Setting up bot routes...');
app.use('/bot', botRoutes);

console.log('Setting up calendar routes...');
app.use('/calendar', calendarRoutes);

console.log('Setting up symbol routes...');
app.use('/symbol', symbolRoutes);

console.log('Setting up other routes...');
app.use('/other', otherRoutes);

console.log('Setting up /main route...');
app.use('/main', mainRoutes);  // mainRoutes를 사용

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});