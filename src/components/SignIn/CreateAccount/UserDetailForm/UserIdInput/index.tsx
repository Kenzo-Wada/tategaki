import { memo } from 'react';

import TextInput from '~/components/assets/TextInput';
import type { InputProps } from '~/components/SignIn/CreateAccount/UserDetailForm';

const UserIdInput = memo((props: InputProps) => {
  return <TextInput placeholder="userid" label="ユーザーID" withAsterisk {...props.form.getInputProps('id')} />;
});

UserIdInput.displayName = 'UserIdInput';

export default UserIdInput;
