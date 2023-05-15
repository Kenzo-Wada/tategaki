import { memo } from 'react';

import FilledButton from '~/components/base/Button/FilledButton';
import useDetailForm from '~/components/pages/Profile/UserDetailForm/hooks/useUserDetailForm';
import UserNameInput from '~/components/pages/Profile/UserDetailForm/UserNameInput';
import type { UseFormReturnType } from '~/lib/mantine/form';

export interface InputProps {
  form: UseFormReturnType<
    { name: string; id: string; password: string },
    (values: { name: string; id: string; password: string }) => { name: string; id: string; password: string }
  >;
}

const UserDetailForm = memo(() => {
  const { form } = useDetailForm();

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <UserNameInput form={form} />
      <FilledButton type="submit">登録</FilledButton>
    </form>
  );
});

UserDetailForm.displayName = 'UserDetailForm';

export default UserDetailForm;
