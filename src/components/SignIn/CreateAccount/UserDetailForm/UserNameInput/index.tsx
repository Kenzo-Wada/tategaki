import { memo } from 'react';

import TextInput from '~/components/assets/TextInput';
import type { InputProps } from '~/components/SignIn/CreateAccount/UserDetailForm';

const UserNameInput = memo((props: InputProps) => {
  return <TextInput placeholder="ユーザー名" label="ユーザー名" withAsterisk {...props.form.getInputProps('name')} />;
});

UserNameInput.displayName = 'UserNameInput';

export default UserNameInput;
