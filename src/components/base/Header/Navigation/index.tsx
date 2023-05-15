import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';

import Group from '~/components/assets/Group';
import LightButton from '~/components/base/Button/LightButton';
import SubtleButton from '~/components/base/Button/SubtleButton';

const Navigation = memo(() => {
  const router = useRouter();

  const isHomePage = router.pathname === '/';
  const isShelfPage = router.pathname === '/favorite';

  return (
    <Group>
      <Link href="/">{isHomePage ? <LightButton>ホーム</LightButton> : <SubtleButton color="gray">ホーム</SubtleButton>}</Link>
      {isShelfPage ? <LightButton>本棚</LightButton> : <SubtleButton color="gray">本棚</SubtleButton>}
    </Group>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
