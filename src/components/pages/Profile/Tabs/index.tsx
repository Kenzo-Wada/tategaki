import { rem } from '@mantine/core';
import { memo } from 'react';

import Tabs from '~/components/assets/Tabs';
import TabsList from '~/components/assets/Tabs/List';
import TabsPanel from '~/components/assets/Tabs/Panel';
import TabsTab from '~/components/assets/Tabs/Tab';
import { IconArticle } from '~/components/icon/Article';

const ProfileTabs = memo(() => {
  return (
    <Tabs defaultValue={'posts'}>
      <TabsList>
        <TabsTab value={'posts'} icon={<IconArticle size={rem(14)} />} fw={'bold'}>
          記事
        </TabsTab>
      </TabsList>
      <TabsPanel value="posts">Posts</TabsPanel>
    </Tabs>
  );
});

ProfileTabs.displayName = 'ProfileTabs';

export default ProfileTabs;
