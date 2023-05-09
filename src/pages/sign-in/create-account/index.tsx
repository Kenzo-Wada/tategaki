import type { NextPage } from 'next';
import { memo } from 'react';

import CreateAccountPageComponent from '~/components/SignIn/CreateAccount';

const CreateAccountPage: NextPage = memo(() => {
  return <CreateAccountPageComponent />;
});

CreateAccountPage.displayName = 'CreateAccountPage';

export default CreateAccountPage;
