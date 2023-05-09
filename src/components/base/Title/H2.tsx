import { memo } from 'react';

import { Title } from '~/components/assets/Title';
import type { TitleProps } from '~/components/assets/Title';

type Props = TitleProps;

const H2 = memo((props: Props) => {
  return <Title order={2} {...props} />;
});

H2.displayName = 'H2';

export default H2;
