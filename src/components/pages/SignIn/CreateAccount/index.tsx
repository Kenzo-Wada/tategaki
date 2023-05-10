import { memo } from 'react';

import UserDetailForm from '~/components/pages/SignIn/CreateAccount/UserDetailForm';

const CreateAccountPageComponent = memo(() => {
  return <UserDetailForm />;
});

CreateAccountPageComponent.displayName = 'CreateAccountPageComponent';

export default CreateAccountPageComponent;
