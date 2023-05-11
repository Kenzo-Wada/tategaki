import { memo } from 'react';

import type { BadgeProps } from '~/components/assets/Badge';
import { Badge } from '~/components/assets/Badge';

type Props = BadgeProps;

const DefaultBadge = memo((props: Props) => {
  return <Badge radius="sm" {...props} />;
});

DefaultBadge.displayName = 'DefaultBadge';

export default DefaultBadge;
