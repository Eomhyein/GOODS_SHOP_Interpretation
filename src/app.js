// app.js : 서브의 설정과 기본적인 동작을 정의 하는 곳

import express from 'express';
import { SERVER_PORT } from './constants/env.constant.js';
import { productsRouter } from './routers/products.router.js';
import { connect } from './schemas/index.js';
import { errorHandler } from './middlewares/error-handler.middleware.js';

connect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', productsRouter);

app.use(errorHandler);

// 서버시작 : Express.js는 지정된 포트 번호를 사용하여 서버를 시작합니다.
app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on ${SERVER_PORT}`);
});
