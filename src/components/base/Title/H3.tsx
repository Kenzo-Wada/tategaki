import { memo } from 'react';

import { Title } from '~/components/assets/Title';
import type { TitleProps } from '~/components/assets/Title';

type Props = TitleProps;

const H3 = memo((props: Props) => {
  return <Title order={3} {...props} />;
});

H3.displayName = 'H3';

export default H3;
