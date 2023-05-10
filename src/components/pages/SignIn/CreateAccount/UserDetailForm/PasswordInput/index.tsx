import { memo } from 'react';

import AssetsPasswordInput from '~/components/assets/PasswordInput';
import type { InputProps } from '~/components/pages/SignIn/CreateAccount/UserDetailForm';

const PasswordInput = memo((props: InputProps) => {
  return <AssetsPasswordInput placeholder="*****" label="パスワード" withAsterisk {...props.form.getInputProps('password')} />;
});

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
