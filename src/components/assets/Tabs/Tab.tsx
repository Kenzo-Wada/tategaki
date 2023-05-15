import { Tabs as MantineTabs } from '@mantine/core';
import type { TabProps as MantineTabProps } from '@mantine/core';
import { memo } from 'react';

type TabProps = MantineTabProps;

const TabsTab = memo((props: TabProps) => {
  return <MantineTabs.Tab {...props} />;
});

TabsTab.displayName = 'TabsTab';

export default TabsTab;
