import { z } from '~/lib/zod';

const idSchema = z
  .string({ required_error: '必須項目です', invalid_type_error: '入力値に誤りがあります' })
  .min(1, { message: '1文字以上入力してください。' })
  .max(20, { message: '20文字以下で入力してください。' })
  .regex(/^[a-zA-Z0-9]+$/, { message: '半角英数字で入力してください' });

export default idSchema;
