// schemas/product.schema.js
// mongoose 가져오기
import mongoose from 'mongoose';
import { PRODUCT_STATUS } from '../constants/product.constant.js';

// 요구사항
// -id:string:상품 ID
// -name:string:상품명
// -description:string:상품 설명
// -password:string:Y:비밀번호
// -manager:string:담당자
// -status:string:상품 상태
// -createdAt:Date:생성 일시
// -updatedAt:Date:수정 일시

// 스키마 작성
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    manager: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // 몽고디비에서 find 명령해서 조회할 때 자동적으로 선택되지 않게 한다.
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(PRODUCT_STATUS),
      default: PRODUCT_STATUS.FOR_SALE,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } },
);

// 스키마 통해 모델 구현
// 모델 외부로 보내기
export const Product = mongoose.model('Product', productSchema);
