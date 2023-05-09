import { z } from '~/lib/zod';

const nameSchema = z
  .string({ required_error: '必須項目です', invalid_type_error: '入力値に誤りがあります' })
  .min(1, { message: '1文字以上で入力してください。' })
  .max(20, { message: '20文字以下で入力してください。' });

export default nameSchema;
