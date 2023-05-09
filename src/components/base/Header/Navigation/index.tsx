import { memo } from 'react';

import Group from '~/components/assets/Group';
import LightButton from '~/components/base/Button/LightButton';
import SubtleButton from '~/components/base/Button/SubtleButton';

const Navigation = memo(() => {
  return (
    <Group>
      <LightButton>ホーム</LightButton>
      <SubtleButton>本棚</SubtleButton>
      <SubtleButton>記事</SubtleButton>
    </Group>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
