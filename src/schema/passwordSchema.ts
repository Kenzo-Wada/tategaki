import { z } from '~/lib/zod';

const passwordSchema = z
  .string({ required_error: '必須項目です', invalid_type_error: '入力値に誤りがあります' })
  .min(8, { message: '8文字以上で入力してください。' })
  .regex(/^[a-zA-Z0-9]+$/, { message: '半角英数字で入力してください' });

export default passwordSchema;
