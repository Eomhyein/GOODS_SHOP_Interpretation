// app.js : 서브의 설정과 기본적인 동작을 정의하는 곳
import express from 'express';
import dotenv from 'dotenv';


dotenv.config();

const{MONGO_URL}=process.env;

const app = express();
const PORT = 3000; // 서버 열 때 사용할 포트번호

// 서버시작 : Express.js는 지정된 포트 번호를 사용하여 서버를 시작합니다. 
app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});