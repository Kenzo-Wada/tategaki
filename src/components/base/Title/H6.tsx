import { memo } from 'react';

import { Title } from '~/components/assets/Title';
import type { TitleProps } from '~/components/assets/Title';

type Props = TitleProps;

const H6 = memo((props: Props) => {
  return <Title order={6} {...props} />;
});

H6.displayName = 'H6';

export default H6;
