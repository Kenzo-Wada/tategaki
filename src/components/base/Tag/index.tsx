import { rem } from '@mantine/core';
import { memo } from 'react';

import type { BadgeProps } from '~/components/assets/Badge';
import { Badge } from '~/components/assets/Badge';
import Center from '~/components/assets/Center';
import { IconTags } from '~/components/icon/Tags';

type Props = BadgeProps;

const Tag = memo((props: Props) => {
  return (
    <Badge
      radius="sm"
      leftSection={
        <Center>
          <IconTags size={rem(18)} />
        </Center>
      }
      {...props}
    />
  );
});

Tag.displayName = 'Tag';

export default Tag;
